import { Schema, model } from 'mongoose';
import { IUser } from '../types/models';

const userModel = new Schema<IUser>({
  name: String,
  email: String,
  password: String,
  idType: {
    type: Number,
    default: 1,
    required: true
  },
  token: {
    type: String,
    default: ""
  }
});

export const User = model('User', userModel);
