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

    if(isUserExisting) return { message: 'email in use' };

    const passwordEncrypted = await this.encryptAdapter.encrypt({ password });

    return await this.userRepository.create({
      name, 
      email,
      idType,
      password: passwordEncrypted
    });
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

    if(userResponse) {
      const isPasswordCorrect = await this.encryptAdapter.verifyPassword({ 
        passwordSent: password,
        passwordCorrect: userResponse.password
      });

      if(isPasswordCorrect) {
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

      return { message: "senha invalida" };
    }

    return { message: "email ou senha invalido" };
  }
}