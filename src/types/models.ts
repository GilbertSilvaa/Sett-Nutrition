import { Document, ObjectId } from 'mongoose';

export interface IFood extends Document {
  name: string;
  image?: string;
  calories: number;
  carbohydrates: number;
  proteins: number;
  fats: number;
  isAccepted: boolean;
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  token?: string;
  idType?: number;
}

export interface IUserInformation extends Document {
  weight: number;
  height: number;
  age: number;
  gender: number;
  imc: number;
  bmr: number;
  userId: ObjectId;
}

export interface IUserGoal extends Document {
  calories: number;
  water: number;
  dateGoal: Date;
  userId: ObjectId;
}

export interface IWater extends Document {
  liters: number;
  dateWater: Date;
  userId: ObjectId;
}

export interface IMealType extends Document {
  name: string;
  image: string;
}

export interface IMeal extends Document {
  foods: {
    food: IFood[],
    amountKilos: number
  };
  mealType: ObjectId;
  userId: ObjectId;
  dateMeal: Date;
}