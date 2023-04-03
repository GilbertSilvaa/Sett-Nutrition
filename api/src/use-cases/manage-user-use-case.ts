import dotenv from 'dotenv-safe';

import { EncryptAdapter } from '../adapters/encrypt-adapter';
import { TokenAdapter } from '../adapters/token-adapter';
import { UserRepository, CreateDataUser } from '../repositories/user-repository';

dotenv.config();

export class ManageUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private encryptAdapter: EncryptAdapter,
    private tokenAdapter: TokenAdapter
  ){}

  async create({ name, email, password, idType }: CreateDataUser) {
    const isUserExisting = await this.userRepository.login({ email, password });

    if(isUserExisting) return { message: "email já cadastrado" };

    const passwordEncrypted = await this.encryptAdapter.encrypt({ password });

    const userResponse = await this.userRepository.create({
      name, 
      email,
      idType,
      password: passwordEncrypted
    });

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

  async update({ _id, name, email, password }: CreateDataUser) {
    const passwordEncrypted = await this.encryptAdapter.encrypt({ password });

    await this.userRepository.update({
      _id,
      name, 
      email,
      password: passwordEncrypted
    });
  }

  async delete(userId: string) {
    await this.userRepository.delete(userId);
  }

  async login({ email, password }: CreateDataUser) {
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