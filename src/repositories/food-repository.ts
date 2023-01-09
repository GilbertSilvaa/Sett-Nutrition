import { IFood } from '../types/models';

export interface CreateDataFood {
  _id?: string;
  name: string;
  calories: number;
  proteins: number; 
  carbohydrates: number; 
  fats: number;
  portionInGrams: number;
  image?: string;
}

export interface FoodRepository {
  getAll: () => Promise<IFood[]>;
  getByname: (name: string) => Promise<IFood[] | null>;
  getById: (foodId: string) => Promise<IFood | null>;
  create: (data: CreateDataFood) => Promise<IFood>; 
  update: (data: CreateDataFood) => Promise<void>;
  delete: (foodId: string) => Promise<void>;
}