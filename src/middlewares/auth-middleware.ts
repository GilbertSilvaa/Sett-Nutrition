import { Request, Response, NextFunction } from 'express';

import { MongoUserRepository } from '../repositories/mongo/mongo-user-repository';

const mongoUserRepository = new MongoUserRepository();

export async function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const token = <string>request.headers['x-access-token'];

  if(!token) 
    return response.status(401).json({ auth: false, message: 'no token provided' });

  const responseUser = await mongoUserRepository.getUserBySession(token);

  if(!responseUser) 
    return response.status(500).json({ auth: false, message: 'failed to authenticate token' });
    
  request.body.userId = responseUser._id;

  next();
}