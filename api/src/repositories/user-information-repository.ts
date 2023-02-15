import { IUserInformation } from '../types/models';

export interface DataUserInformation {
  weight?: number;
  height?: number;
  age?: number;
  gender?: number;
  imc?: number;
  bmr?: number;
  userId?: string;
  activityLevel?: number;
}

export interface UserInformationRepository {
  update: (data: DataUserInformation) => Promise<void>;
  getInformationById: (userId: string) => Promise<IUserInformation | null>;
}