import { IWater } from '../types/models';

export interface DataAddWater {
  liters: number;
  userId: string;
}
export interface DataGetWater {
  date: Date;
  userId: string;
}

export interface WaterRepository {
  getWaterByDate: (data: DataGetWater) => Promise<IWater[] | null>;
  addWater: (data: DataAddWater) => Promise<void>;
  removeWater: (idWater: string) => Promise<void>;
}