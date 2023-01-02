import { CreateDataFood, FoodRepository } from '../repositories/food-repository';

export class ManageFoodUseCase {
  constructor(private foodRepository: FoodRepository){}

  async getAll() {
    return await this.foodRepository.getAll();
  }

  async getById(_id: string) {
    return await this.foodRepository.getById(_id);
  }

  async create({ name, proteins, carbohydrates, fats, image }: CreateDataFood) {
    return await this.foodRepository.create({
      name,
      proteins,
      carbohydrates,
      fats,
      image
    });
  }

  async update({ _id, name, proteins, carbohydrates, fats, image }: CreateDataFood) {
    await this.foodRepository.update({
      _id, 
      name, 
      proteins,
      carbohydrates,
      fats,
      image
    });
  }

  async delete(_id: string) {
    await this.foodRepository.delete(_id);
  }
}