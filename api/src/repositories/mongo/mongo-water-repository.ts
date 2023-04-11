import { DataAddWater, WaterRepository, DataGetWater } from '../water-repository';
import { Water } from '../../models/water-model';

export class MongoWaterRepository implements WaterRepository {

  async getWaterByDate({ date, userId }: DataGetWater) {
    return await Water.find({
      userId,
      '$where': `this.dateWater.toJSON().slice(0, 10) == "${date}"`
    });
  }

  async addWater(params: DataAddWater) {
    await Water.create(params);
  }

  async removeWater(_id: string) {
    await Water.deleteOne({ _id });
  }
}