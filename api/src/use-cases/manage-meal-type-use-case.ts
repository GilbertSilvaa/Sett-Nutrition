import { MealTypeRepository, CreateDataMealType } from '../repositories/meal-type-repository';

export class ManageMealTypeUseCase {
  constructor(private mealTypeRepository: MealTypeRepository) {}

  async getAll() {
    return await this.mealTypeRepository.getAll();
  }

  async create({ name, image }: CreateDataMealType) {
    return await this.mealTypeRepository.create({
      name,
      image
    });
  }

  async update({ name, image, _id }: CreateDataMealType) {
    await this.mealTypeRepository.update({
      name,
      image,
      _id
    });
  }

  async delete(_id: string) {
    await this.mealTypeRepository.delete(_id);
  }
}