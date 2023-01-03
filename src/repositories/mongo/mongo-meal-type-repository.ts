import { CreateDataMealType, MealTypeRepository } from '../meal-type-repository';
import { MealType } from '../../models/meal-type-model';

export class MongoMealTypeRepository implements MealTypeRepository {
  
  async getAll() {
    return await MealType.find();
  }

  async create({ name, image }: CreateDataMealType) {
    return await MealType.create({
      name,
      image
    });
  }
  
  async update({ name, image, _id }: CreateDataMealType) {
    await MealType.updateOne({ _id }, {
      name,
      image
    });
  }

  async delete(_id: string) {
    await MealType.deleteOne({ _id });
  }
}