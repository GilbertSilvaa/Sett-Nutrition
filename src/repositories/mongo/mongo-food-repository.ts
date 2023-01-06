import { CreateDataFood, FoodRepository } from '../food-repository';
import { Food } from '../../models/food-model';

export class MongoFoodRepository implements FoodRepository {

  async getAll() {
    return await Food.find().sort({ name: 1 });
  }

  async getByname(name: string) {
    return await Food.find({
      name: {
        $regex: `.*${name}.*`
      }
    });
  }
  
  async getById(_id: string) {
    return await Food.findOne({ _id });
  }
  
  async create({ name, calories, proteins, carbohydrates, fats, image }: CreateDataFood) {
    return await Food.create({
      name,
      calories,
      proteins,
      carbohydrates,
      fats,
      image
    });
  }

  async update({ _id, name, calories, proteins, carbohydrates, fats, image }: CreateDataFood) {
    await Food.updateOne({ _id }, {
      name, 
      calories,
      proteins,
      carbohydrates,
      fats,
      image
    });
  }

  async delete(_id: string) {
    await Food.deleteOne({ _id });
  }
}