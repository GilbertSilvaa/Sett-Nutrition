import { Router } from 'express';

import { MongoUserRepository } from '../repositories/mongo/mongo-user-repository';
import { ManageUserUseCase } from '../use-cases/manage-user-use-case';
import { CreateDataUser } from '../repositories/user-repository';
import { BcryptEncryptAdapter } from '../adapters/bcrypt/bcrypt-encrypt-adapter';
import { JwtTokenAdapter } from '../adapters/jwt/jwt-token-adapter';
import { MongoUserInformationRepository } from '../repositories/mongo/mongo-user-information-repository';
import { ManageUserInformationUseCase } from '../use-cases/manage-user-information-use-case';
import { DataUserInformation } from '../repositories/user-information-repository';
import { MongoUserGoalRepository } from '../repositories/mongo/mongo-user-goal-repository';
import { ManageUserGoalUseCase } from '../use-cases/manage-user-goal-use-case';
import { DataUserGoal } from '../repositories/user-goal-repository';
import { authMiddleware } from '../middlewares/auth-middleware';

export const userRouter = Router();

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

// create a user
userRouter.post('/create', async (request, response) => {
  const data = <CreateDataUser>request.body;

  const userResponse = await manageUserUseCase.create(data);
  
  return response.status(201).json(userResponse);
});

// update in user
userRouter.put('/update', authMiddleware, async (request, response) => {
  const data = <CreateDataUser>request.body;

  await manageUserUseCase.update({
    ...data,
    _id: request.body.userId
  });

  return response.status(204).send();
});

// delete user
userRouter.delete('/delete', authMiddleware, async (request, response) => {
  await manageUserUseCase.delete(request.body.userId);

  return response.status(204).send();
});

// user login
userRouter.post('/login', async (request, response) => {
  const { email, password } = <CreateDataUser>request.body;

  const userResponse = await manageUserUseCase.login({ email, password });

  return response.status(200).json(userResponse);
});

// search user informations
userRouter.get('/informations', authMiddleware, async (request, response) => {
  const userInformationsResponse = await manageUserInformationUseCase.getInformationById(
    request.body.userId
  );

  return response.status(200).json(userInformationsResponse);
});

// update in user informations
userRouter.put('/update-informations', authMiddleware, async (request, response) => {
  const data = <DataUserInformation>request.body;

  await manageUserInformationUseCase.update({
    ...data,
    userId: request.body.userId
  });

  return response.status(204).send();
});

// search user goals
userRouter.get('/goals', authMiddleware, async (request, response) => {
  const userGoalsResponse = await manageUserGoalUseCase.getGoatById(
    request.body.userId
  );

  return response.status(200).json(userGoalsResponse);
});

// update in user goals
userRouter.put('/update-goals', authMiddleware, async (request, response) => {
  const data = <DataUserGoal>request.body;

  await manageUserGoalUseCase.update({
    ...data,
    userId: request.body.userId
  });

  return response.status(204).send();
});