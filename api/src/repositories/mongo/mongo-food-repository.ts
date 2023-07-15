import { CreateDataFood, FoodRepository } from '../food-repository';
import { Food } from '../../models/food-model';
import { Meal } from '../../models/meal-model';

export class MongoFoodRepository implements FoodRepository {

  async getAll() {
    return await Food.find().sort({ name: 1 });
  }

  async getByname(name: string) {
    return await Food.find({
      name: {
        $regex: `.*${name}.*`,
        $options: 'i'
      }
    });
  }
  
  async getById(_id: string) {
    return await Food.findOne({ _id });
  }
  
  async create(params: CreateDataFood) {
    return await Food.create(params);
  }

  async update({ _id, ...params }: CreateDataFood) {
    await Food.updateOne({ _id }, params);
  }

  async delete(_id: string) {
    await Promise.all([
      Food.deleteOne({ _id }),
      Meal.deleteMany({ 'foods.food': _id })
    ]);
  }
}