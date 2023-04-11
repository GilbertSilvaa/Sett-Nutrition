import dotenv from 'dotenv-safe';

import { EncryptAdapter } from '../adapters/encrypt-adapter';
import { TokenAdapter } from '../adapters/token-adapter';
import { CreateDataUser, UserRepository } from '../repositories/user-repository';

dotenv.config();

export class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private encryptAdapter: EncryptAdapter,
    private tokenAdapter: TokenAdapter
  ){}

  async execute({ email, password }: CreateDataUser) {
    const userResponse = await this.userRepository.login({ email, password });

    if(!userResponse)  
      return { message: "email ou senha invalido" };

    const isPasswordCorrect = await this.encryptAdapter.verifyPassword({ 
      passwordSent: password,
      passwordCorrect: userResponse.password
    });

    if(!isPasswordCorrect) 
      return { message: "senha invalida" };
      
    const KEY_JWT = process.env.KEY_JWT ?? "";

    const token = this.tokenAdapter.createToken({ 
      id: userResponse._id,
      secret: KEY_JWT,
      expiresTime: 300000
    });
    
    await this.userRepository.newSession({
      idUser: userResponse._id,
      token
    });

    userResponse.token = token;

    return userResponse;
  }

}