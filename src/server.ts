import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';

import { foodRouter } from './routes/food-route';
import { userRouter } from './routes/user-route';
import { waterRouter } from './routes/water-route';

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION!)
.then(() => {
  console.log('connected to database');

  const app = express();

  app.use(express.json());
  app.use('/food', foodRouter);
  app.use('/user', userRouter);
  app.use('/water', waterRouter);

  const port = 4000;

  app.listen(port, () => console.log(`HTTP server running in port ${port}`));
})
.catch(error => console.log(`error connecting to database : ${error}`));
