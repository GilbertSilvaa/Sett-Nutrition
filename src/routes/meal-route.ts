import { Router } from 'express';

import { MongoMealTypeRepository } from '../repositories/mongo/mongo-meal-type-repository';
import { ManageMealTypeUseCase } from '../use-cases/manage-meal-type-use-case';
import { CreateDataMealType } from '../repositories/meal-type-repository';
import { authMiddleware } from '../middlewares/auth-middleware';

export const mealRouter = Router();

const mongoMealTypeRepository = new MongoMealTypeRepository();
const manageMealTypeUseCase = new ManageMealTypeUseCase(
  mongoMealTypeRepository
);

// get all meal types
mealRouter.get('/all-types', authMiddleware, async (request, response) => {
  const mealTypesResponse = await manageMealTypeUseCase.getAll();

  return response.status(200).json(mealTypesResponse);
});

// create meal type
mealRouter.post('/create-type', authMiddleware, async (request, response) => {
  const { name, image } = <CreateDataMealType>request.body;

  const mealTypeResponse = await manageMealTypeUseCase.create({
    name,
    image
  });

  return response.status(201).json(mealTypeResponse);
});

// update meal type
mealRouter.put('/update-type', authMiddleware, async (request, response) => {
  const { name, image, _id } = <CreateDataMealType>request.body;

  await manageMealTypeUseCase.update({
    name,
    image,
    _id
  });

  return response.status(204).send();
});

// delete meal type by id
mealRouter.delete('/delete-type/:id', authMiddleware, async (request, response) => {
  await manageMealTypeUseCase.delete(request.params.id);

  return response.status(204).send();
});