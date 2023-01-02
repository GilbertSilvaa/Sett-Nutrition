import { UserRepository, CreateDataUser, NewSessionData } from '../user-repository';
import { UserInformation } from '../../models/user-information-model';
import { UserGoal } from '../../models/user-goal-model';
import { User } from '../../models/user-model';

export class MongoUserRepository implements UserRepository {

  async create({ name, email, password, idType }: CreateDataUser) {
    const userResponse = await User.create({
      name,
      email,
      password,
      idType
    });

    await UserInformation.create({
      userId: userResponse._id
    });

    await UserGoal.create({
      userId: userResponse._id
    });

    return userResponse;
  }
  
  async update({ _id, name, password }: CreateDataUser) {
    if(name)
      await User.updateOne({ _id }, {
        name
      });
    else 
      await User.updateOne({ _id }, {
        password
      });
  }

  async delete(_id: string) {
    await User.deleteOne({ _id });
  }

  async login({ email }: CreateDataUser) {
    return await User.findOne({ email });
  }

  async newSession({ idUser, token }: NewSessionData) {
    await User.updateOne({ _id: idUser }, { token });
    
    return token;
  }

  async getUserBySession(token: string) {
    return await User.findOne({ token });
  }
}