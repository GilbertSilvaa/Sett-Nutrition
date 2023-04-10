import { MealTypeRepository, CreateDataMealType } from '../repositories/meal-type-repository';

export class ManageMealTypeUseCase {
  constructor(private mealTypeRepository: MealTypeRepository) {}

  async getAll() {
    return await this.mealTypeRepository.getAll();
  }

  async create(params: CreateDataMealType) {
    return await this.mealTypeRepository.create(params);
  }

  async update(params: CreateDataMealType) {
    await this.mealTypeRepository.update(params);
  }

  async delete(_id: string) {
    await this.mealTypeRepository.delete(_id);
  }
}