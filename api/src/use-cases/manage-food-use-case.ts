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

  async create(params: CreateDataFood) {
    return await this.foodRepository.create(params);
  }

  async update(params: CreateDataFood) {
    await this.foodRepository.update(params);
  }

  async delete(_id: string) {
    await this.foodRepository.delete(_id);
  }
}