import { Router } from 'express';

import { MongoMealRepository } from '../repositories/mongo/mongo-meal-repository';
import { ManageMealUseCase } from '../use-cases/manage-meal-use-case';
import { MongoMealTypeRepository } from '../repositories/mongo/mongo-meal-type-repository';
import { ManageMealTypeUseCase } from '../use-cases/manage-meal-type-use-case';
import { CreateDataMealType } from '../repositories/meal-type-repository';
import { CreateDataMeal, DataGetMeal } from '../repositories/meal-repository';
import { authMiddleware } from '../middlewares/auth-middleware';
import { MongoFoodRepository } from '../repositories/mongo/mongo-food-repository';

export const mealRouter = Router();

const mongoMealTypeRepository = new MongoMealTypeRepository();
const manageMealTypeUseCase = new ManageMealTypeUseCase(
  mongoMealTypeRepository
);

const mongoMealRepository = new MongoMealRepository();
const mongoFoodRepository = new MongoFoodRepository();
const manageMealUseCase = new ManageMealUseCase(mongoMealRepository, mongoFoodRepository);

// create a meal
mealRouter.post('/create', authMiddleware, async (request, response) => {
  const { foods, mealType } = <CreateDataMeal>request.body;

  const mealResponse = await manageMealUseCase.create({
    foods,
    mealType,
    userId: request.body.userId
  });

  return response.status(201).json(mealResponse);
});

// get meals user
mealRouter.get('/meals', authMiddleware, async (request, response) => {
  const { date } = <DataGetMeal>request.body;

  const mealsResponse = await manageMealUseCase.getMeals({
    date,
    userId: request.body.userId
  });

  return response.status(200).json(mealsResponse);
});

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