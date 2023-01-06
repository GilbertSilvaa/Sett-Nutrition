import { MealRepository, CreateDataMeal, DataGetMeal } from '../meal-repository';
import { Meal } from '../../models/meal-model';

export class MongoMealRepository implements MealRepository {

  async getMeals({ date, userId }: DataGetMeal) {
    return await Meal.find({
      userId,
      '$where': `this.dateMeal.toJSON().slice(0, 10) == "${date}"`
    }).populate('foods.food');
  }

  async create({ foods, mealType, userId }: CreateDataMeal) {
    return await Meal.create({
      foods,
      mealType,
      userId
    });
  }

  async update({ _id, foods, mealType }: CreateDataMeal) {
    await Meal.updateOne({ _id }, {
      foods,
      mealType
    });
  }

  async delete(_id: string) {
    await Meal.deleteOne({ _id });
  }
}