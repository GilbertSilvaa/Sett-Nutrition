import { Schema, model } from 'mongoose';
import { IFood } from '../types/models';

const foodModel = new Schema<IFood>({
  name: String,
  carbohydrates: Number,
  proteins: Number,
  fats: Number,
  image: {
    type: String,
    default: ""
  },
  isAccepted: {
    type: Boolean,
    default: false
  }
});

export const Food = model('Food', foodModel);
