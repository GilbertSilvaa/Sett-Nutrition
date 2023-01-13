import { IUserGoal } from '../types/models';

export interface DataUserGoal {
  calories?: number;
  water?: number;
  dateGoal?: Date;
  userId?: string;
}

export interface UserGoalRepository {
  update: (data: DataUserGoal) => Promise<void>;
  getGoatById: (userId: string) => Promise<IUserGoal | null>;
}