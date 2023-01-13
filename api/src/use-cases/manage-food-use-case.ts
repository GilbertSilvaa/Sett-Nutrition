import { CreateDataFood, FoodRepository } from '../repositories/food-repository';

export class ManageFoodUseCase {
  constructor(private foodRepository: FoodRepository){}

  async getAll() {
    return await this.foodRepository.getAll();
  }

  async getByName(name: string) {
    return await this.foodRepository.getByname(name);
  }

  async getById(_id: string) {
    return await this.foodRepository.getById(_id);
  }

  async create({ name, calories, proteins, carbohydrates, fats, portionInGrams, image }: CreateDataFood) {
    return await this.foodRepository.create({
      name,
      calories,
      proteins,
      carbohydrates,
      fats,
      portionInGrams,
      image
    });
  }

  async update({ _id, name, calories, proteins, carbohydrates, fats, portionInGrams, image }: CreateDataFood) {
    await this.foodRepository.update({
      _id, 
      name, 
      calories,
      proteins,
      carbohydrates,
      fats,
      portionInGrams,
      image
    });
  }

  async delete(_id: string) {
    await this.foodRepository.delete(_id);
  }
}