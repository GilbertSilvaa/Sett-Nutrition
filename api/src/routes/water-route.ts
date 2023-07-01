import { Router } from 'express';

import { MongoWaterRepository } from '../repositories/mongo/mongo-water-repository';
import { ManageWaterUseCase } from '../use-cases/manage-water-use-case';
import { DataAddWater, DataGetWater } from '../repositories/water-repository';
import { authMiddleware } from '../middlewares/auth-middleware';

export const waterRouter = Router();

const mongoWaterRepository = new MongoWaterRepository();
const manageWaterRepository = new ManageWaterUseCase(mongoWaterRepository);

// search user water consumption by date 
waterRouter.post('/search', authMiddleware, async (request, response) => {
  const { date } = <DataGetWater>request.body;

  const waterResponse = await manageWaterRepository.getWaterByDate({
    date,
    userId: request.body.userId
  });
  
  return response.status(200).json(waterResponse?.reverse());
});

// user registers water consumption
waterRouter.post('/add', authMiddleware, async (request, response) => {
  const { liters } = <DataAddWater>request.body;

  const waterResponso = await manageWaterRepository.addWater({
    liters,
    userId: request.body.userId
  });

  return response.status(200).json(waterResponso);
});

// user removes a water consumption record
waterRouter.delete('/remove/:id', authMiddleware, async (request, response) => {
  await manageWaterRepository.removeWater(request.params.id);

  return response.status(204).send();
});