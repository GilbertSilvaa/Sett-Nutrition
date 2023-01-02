import { hash, compare } from 'bcrypt';

import { EncryptAdapter, EncryptData, VerifyPasswordData } from '../encrypt-adapter';

export class BcryptEncryptAdapter implements EncryptAdapter {
  constructor(private saltRounds = 13){}

  async encrypt({ password }: EncryptData) {
    return await hash(password, this.saltRounds);
  }

  async verifyPassword({ passwordSent, passwordCorrect }: VerifyPasswordData) {
    return await compare(passwordSent, passwordCorrect);
  }
}