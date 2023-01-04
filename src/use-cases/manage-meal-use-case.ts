import { MealRepository, CreateDataMeal, DataGetMeal } from '../repositories/meal-repository';

export class ManageMealUseCase {
  constructor(private mealRepository: MealRepository) {}

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