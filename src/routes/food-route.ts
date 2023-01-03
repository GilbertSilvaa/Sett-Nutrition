import { Router } from 'express';

import { MongoFoodRepository } from '../repositories/mongo/mongo-food-repository';
import {  ManageFoodUseCase } from '../use-cases/manage-food-use-case';
import { CreateDataFood } from '../repositories/food-repository';
import { authMiddleware } from '../middlewares/auth-middleware';

export const foodRouter = Router();

const mongoFoodRepository = new MongoFoodRepository();
const manageFoodUseCase = new ManageFoodUseCase(mongoFoodRepository);

// search all foods
foodRouter.get('/all', authMiddleware ,async (request, response) => {
  const foodsResponse = await manageFoodUseCase.getAll();
  
  return response.status(200).json(foodsResponse);
});

// search food by id
foodRouter.get('/:id', authMiddleware, async (request, response) => {
  const foodResponse = await manageFoodUseCase.getById(request.params.id);

  return response.status(200).json(foodResponse);
});

// create a food
foodRouter.post('/create', authMiddleware, async (request, response) => {
  const { name, proteins, carbohydrates, fats, image } = <CreateDataFood>request.body;

  const foodResponse = await manageFoodUseCase.create({
    name,
    proteins,
    carbohydrates,
    fats,
    image
  });

  return response.status(201).json(foodResponse);
});

// update in food
foodRouter.put('/update', authMiddleware, async (request, response) => {
  const { _id, name, proteins, carbohydrates, fats, image } = <CreateDataFood>request.body;
  
  await manageFoodUseCase.update({
    _id,
    name,
    proteins,
    carbohydrates,
    fats,
    image
  });

  return response.status(204).send();
});

// delete food by id
foodRouter.delete('/delete/:id', authMiddleware, async (request, response) => {
  await manageFoodUseCase.delete(request.params.id);

  return response.status(204).send();
});