import { Schema, model, Types } from 'mongoose';
import { IMeal } from '../types/models';

const mealModel = new Schema<IMeal>({
  foods: [{
    type: Types.ObjectId,
    ref: 'Food'
  }],
  mealType: {
    type: Types.ObjectId,
    ref: 'MealType'
  },
  userId: {
    type: Types.ObjectId,
    ref: 'User'
  },
  dateMeal: {
    type: Date,
    default: new Date()
  }
});

export const Meal = model('Meal', mealModel);