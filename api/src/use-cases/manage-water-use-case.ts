import { WaterRepository, DataAddWater, DataGetWater } from '../repositories/water-repository';

export class ManageWaterUseCase {
  constructor(private waterRepository: WaterRepository) {}

  async getWaterByDate(params: DataGetWater) {
    return await this.waterRepository.getWaterByDate(params);
  }

  async addWater(params: DataAddWater) {
    return await this.waterRepository.addWater(params);
  }

  async removeWater(waterId: string) {
    await this.waterRepository.removeWater(waterId);
  }

}