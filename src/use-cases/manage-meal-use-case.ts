import { FoodRepository } from '../repositories/food-repository';
import { MealRepository, CreateDataMeal, DataGetMeal } from '../repositories/meal-repository';
import { IFood } from '../types/models';

export class ManageMealUseCase {
  constructor(
    private mealRepository: MealRepository,
    private foodRepository: FoodRepository
  ) {}

  async create({ foods, mealType, userId }: CreateDataMeal) {
    return await this.mealRepository.create({
      foods,
      userId,
      mealType
    });
  }

  async getMeals({ date, userId }: DataGetMeal) {
    return await this.mealRepository.getMeals({
      date,
      userId
    });
  }
}