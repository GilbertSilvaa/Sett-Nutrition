import { Schema, model } from 'mongoose';
import { IMealType } from '../types/models';

const mealTypeModel = new Schema<IMealType>({
  name: String,
  image: String
});

export const MealType = model('MealType', mealTypeModel);