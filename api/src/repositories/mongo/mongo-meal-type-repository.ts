import { CreateDataMealType, MealTypeRepository } from '../meal-type-repository';
import { MealType } from '../../models/meal-type-model';
import { Meal } from '../../models/meal-model';

export class MongoMealTypeRepository implements MealTypeRepository {
  
  async getAll() {
    return await MealType.find();
  }

  async create(params: CreateDataMealType) {
    return await MealType.create(params);
  }
  
  async update({ name, image, _id }: CreateDataMealType) {
    await MealType.updateOne({ _id }, {
      name,
      image
    });
  }

  async delete(_id: string) {
    await Promise.all([
      MealType.deleteOne({ _id }), 
      Meal.deleteMany({ mealType: _id })
    ]);
  }
}