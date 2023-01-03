import { Schema, model, Types } from 'mongoose';
import { IWater } from '../types/models';

const waterModel = new Schema<IWater>({
  liters: Number,
  dateWater: {
    type: Date,
    default: new Date()
  },
  userId: {
    type: Types.ObjectId,
    ref: 'User'
  }
});

export const Water = model('Water', waterModel);