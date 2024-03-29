import { MealRepository, CreateDataMeal, DataGetMeal } from '../meal-repository';
import { Meal } from '../../models/meal-model';

export class MongoMealRepository implements MealRepository {

  async getMeals({ date, userId }: DataGetMeal) {
    return await Meal.find({
      userId,
      '$where': `this.dateMeal.toJSON().slice(0, 10) == "${date}"`
    }).populate('foods.food');
  }

  async create(params: CreateDataMeal) {
    return await Meal.create(params);
  }

  async update({ _id, ...params}: CreateDataMeal) {
    await Meal.updateOne({ _id }, params);
  }

  async delete(_id: string) {
    await Meal.deleteOne({ _id });
  }
}