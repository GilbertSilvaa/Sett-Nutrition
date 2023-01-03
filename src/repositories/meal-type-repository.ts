import { IMealType } from '../types/models';

export interface CreateDataMealType {
  _id?: string;
  name?: string;
  image?: string;
}

export interface MealTypeRepository {
  getAll: () => Promise<IMealType[]>;
  create: (data: CreateDataMealType) => Promise<IMealType>;
  update: (data: CreateDataMealType) => Promise<void>;
  delete: (idMealType: string) => Promise<void>;
}