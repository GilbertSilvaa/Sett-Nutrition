import { Schema, model } from 'mongoose';
import { IFood } from '../types/models';

const foodModel = new Schema<IFood>({
  name: String,
  calories: Number,
  carbohydrates: Number,
  proteins: Number,
  fats: Number,
  portionInGrams: {
    type: Number,
    default: 100
  },
  image: {
    type: String,
    default: ""
  },
  isAccepted: {
    type: Boolean,
    default: true
  }
});

export const Food = model('Food', foodModel);
