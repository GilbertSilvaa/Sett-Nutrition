import { IUser } from '../types/models';

export interface CreateDataUser {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  idType?: number;
}
export interface NewSessionData {
  idUser: string;
  token: string;
}

export interface UserRepository {
  create: (data: CreateDataUser) => Promise<IUser>;
  login: (data: CreateDataUser) => Promise<IUser | null>;
  newSession: (data: NewSessionData) => Promise<String>;
  getUserBySession: (data: string) => Promise<IUser | null>;
  update: (data: CreateDataUser) => Promise<void>;
  delete: (userId: string) => Promise<void>;
}