import { MealRepository, CreateDataMeal, DataGetMeal } from '../repositories/meal-repository';

export class ManageMealUseCase {
  constructor(private mealRepository: MealRepository) {}
  
  async getMeals({ date, userId }: DataGetMeal) {
    return await this.mealRepository.getMeals({
      date,
      userId
    });
  }

  async create({ foods, mealType, userId }: CreateDataMeal) {
    return await this.mealRepository.create({
      foods,
      userId,
      mealType
    });
  }

  async update({ _id, foods, mealType }: CreateDataMeal) {
    await this.mealRepository.update({
      _id,
      foods,
      mealType
    });
  }

  async delete(mealId: string) {
    await this.mealRepository.delete(mealId);
  }
}