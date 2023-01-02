import express from 'express';

import { MongoUserRepository } from '../repositories/mongo/mongo-user-repository';
import { ManageUserUseCase } from '../use-cases/manage-user-use-case';
import { CreateDataUser } from '../repositories/user-repository';
import { BcryptEncryptAdapter } from '../adapters/bcrypt/bcrypt-encrypt-adapter';
import { JwtTokenAdapter } from '../adapters/jwt/jwt-token-adapter';
import { authMiddleware } from '../middlewares/auth-middleware';
import { MongoUserInformationRepository } from '../repositories/mongo/mongo-user-information-repository';
import { ManageUserInformationUseCase } from '../use-cases/manage-user-information-use-case';
import { DataUserInformation } from '../repositories/user-information-repository';
import { MongoUserGoalRepository } from '../repositories/mongo/mongo-user-goal-repository';
import { ManageUserGoalUseCase } from '../use-cases/manage-user-goal-use-case';
import { DataUserGoal } from '../repositories/user-goal-repository';

export const userRouter = express.Router();

const mongoUserRepository = new MongoUserRepository();
const bcryptEncryptAdapter = new BcryptEncryptAdapter();
const jwtTokenAdapter = new JwtTokenAdapter();

const manageUserUseCase = new ManageUserUseCase(
  mongoUserRepository, 
  bcryptEncryptAdapter, 
  jwtTokenAdapter
); 

const mongoUserInformationRepository = new MongoUserInformationRepository();
const manageUserInformationUseCase = new ManageUserInformationUseCase(
  mongoUserInformationRepository
);

const mongoUserGoalRepository = new MongoUserGoalRepository();
const manageUserGoalUseCase = new ManageUserGoalUseCase(mongoUserGoalRepository);

userRouter.post('/create', async (request, response) => {
  const { name, email, password, idType } = <CreateDataUser>request.body;

  const userResponse = await manageUserUseCase.create({
    name,
    email,
    password,
    idType
  });

  return response.status(201).json(userResponse);
});

userRouter.put('/update', authMiddleware, async (request, response) => {
  const { name, email, password } = <CreateDataUser>request.body;

  await manageUserUseCase.update({
    _id: request.body.userId,
    name, 
    email,
    password
  });

  return response.status(204).send();
});

userRouter.delete('/delete', authMiddleware, async (request, response) => {
  await manageUserUseCase.delete(request.body.userId);

  return response.status(204).send();
});

userRouter.post('/login', async (request, response) => {
  const { email, password } = <CreateDataUser>request.body;

  const userResponse = await manageUserUseCase.login({ email, password });

  return response.status(200).json(userResponse);
});

userRouter.get('/informations', authMiddleware, async (request, response) => {
  const userInformationsResponse = await manageUserInformationUseCase.getInformationById(
    request.body.userId
  );

  return response.status(200).json(userInformationsResponse);
});

userRouter.put('/update-informations', authMiddleware, async (request, response) => {
  const { weight, height, gender, age, bmr, imc } = <DataUserInformation>request.body;

  await manageUserInformationUseCase.update({
    weight,
    height,
    gender,
    age,
    bmr,
    imc,
    userId: request.body.userId
  });

  return response.status(204).send();
});

userRouter.get('/goals', authMiddleware, async (request, response) => {
  const userGoalsResponse = await manageUserGoalUseCase.getGoatById(
    request.body.userId
  );

  return response.status(200).json(userGoalsResponse);
});

userRouter.put('/update-goals', authMiddleware, async (request, response) => {
  const { calories, water } = <DataUserGoal>request.body;

  await manageUserGoalUseCase.update({
    calories,
    water,
    userId: request.body.userId
  });

  return response.status(204).send();
});