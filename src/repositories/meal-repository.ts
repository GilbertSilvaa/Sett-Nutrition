import { IMeal } from '../types/models';

export interface CreateDataMeal {
  foods: string[];
  mealType: string;
  userId: string;
}
export interface DataGetMeal {
  userId: string;
  date: Date;
}

export interface MealRepository {
  create: (data: CreateDataMeal) => Promise<IMeal>;
  getMeals: (data: DataGetMeal) => Promise<IMeal[]>;
}