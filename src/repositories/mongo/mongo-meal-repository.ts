import { MealRepository, CreateDataMeal, DataGetMeal } from '../meal-repository';
import { Meal } from '../../models/meal-model';

export class MongoMealRepository implements MealRepository {

  async create({ foods, mealType, userId }: CreateDataMeal) {
    return await Meal.create({
      foods,
      mealType,
      userId
    });
  }

  async getMeals({ date, userId }: DataGetMeal) {
    return await Meal.find({
      userId,
      '$where': `this.dateMeal.toJSON().slice(0, 10) == "${date}"`
    }).populate('foods');
  }
}