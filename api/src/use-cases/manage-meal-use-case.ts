import { MealRepository, CreateDataMeal, DataGetMeal } from '../repositories/meal-repository';

export class ManageMealUseCase {
  constructor(private mealRepository: MealRepository) {}
  
  async getMeals(params: DataGetMeal) {
    return await this.mealRepository.getMeals(params);
  }

  async create(params: CreateDataMeal) {
    return await this.mealRepository.create(params);
  }

  async update(params: CreateDataMeal) {
    await this.mealRepository.update(params);
  }

  async delete(mealId: string) {
    await this.mealRepository.delete(mealId);
  }
}