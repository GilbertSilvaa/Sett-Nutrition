import { IMeal } from '../types/models';

export interface CreateDataMeal {
  _id?: string;
  foods: string[];
  mealType: string;
  userId?: string;
}
export interface DataGetMeal {
  userId: string;
  date: Date;
}

export interface MealRepository {
  create: (data: CreateDataMeal) => Promise<IMeal>;
  getMeals: (data: DataGetMeal) => Promise<IMeal[]>;
  update: (data: CreateDataMeal) => Promise<void>;
  delete: (mealId: string) => Promise<void>;
}