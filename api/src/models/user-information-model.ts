import { Schema, model, Types } from 'mongoose';
import { IUserInformation } from '../types/models';

const userInformationModel = new Schema<IUserInformation>({
  weight: {
    type: Number,
    default: null
  },
  height: {
    type: Number,
    default: null
  },
  age: {
    type: Number,
    default: null
  },
  gender: {
    type: Number,
    default: null
  },
  imc: {
    type: Number,
    default: null
  },
  bmr: {
    type: Number,
    default: null
  },
  activityLevel: {
    type: Number,
    default: 1
  },
  userId: {
    type: Types.ObjectId,
    ref: 'User'
  }
});

export const UserInformation = model('UserInformation', userInformationModel);