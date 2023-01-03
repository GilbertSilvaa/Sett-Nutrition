import { WaterRepository, DataAddWater, DataGetWater } from '../repositories/water-repository';

export class ManageWaterUseCase {
  constructor(private waterRepository: WaterRepository) {}

  async getWaterByDate({ date, userId }: DataGetWater) {
    return await this.waterRepository.getWaterByDate({
      date,
      userId
    });
  }

  async addWater({ liters, userId }: DataAddWater) {
    await this.waterRepository.addWater({
      liters,
      userId
    });
  }

  async removeWater(waterId: string) {
    await this.waterRepository.removeWater(waterId);
  }

}