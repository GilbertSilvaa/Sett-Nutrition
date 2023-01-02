import { Schema, model, Types } from 'mongoose';
import { IUserGoal } from '../types/models';

const userGoalModel = new Schema<IUserGoal>({
  calories: {
    type: Number,
    default: null
  },
  water: {
    type: Number,
    default: null
  },
  dateGoal: {
    type: Date,
    defaut: new Date()
  },
  userId: {
    type: Types.ObjectId,
    ref: 'User'
  }
});

export const UserGoal = model('UserGoal', userGoalModel);