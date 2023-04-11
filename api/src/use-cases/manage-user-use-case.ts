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

  async create({  email, password, ...params }: CreateDataUser) {
    const isUserExisting = await this.userRepository.login({ email, password });

    if(isUserExisting) return { message: "email já cadastrado" };

    const passwordEncrypted = await this.encryptAdapter.encrypt({ password });

    const userResponse = await this.userRepository.create({
      ...params,
      email,
      password: passwordEncrypted,
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

  async update({ password, ...params }: CreateDataUser) {
    const passwordEncrypted = await this.encryptAdapter.encrypt({ password });

    await this.userRepository.update({
      ...params,
      password: passwordEncrypted
    });
  }

  async delete(userId: string) {
    await this.userRepository.delete(userId);
  }
}