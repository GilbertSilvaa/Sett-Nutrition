import { UserRepository, CreateDataUser, NewSessionData } from '../user-repository';
import { UserInformation } from '../../models/user-information-model';
import { UserGoal } from '../../models/user-goal-model';
import { Water } from '../../models/water-model';
import { User } from '../../models/user-model';
import { Meal } from '../../models/meal-model';

export class MongoUserRepository implements UserRepository {

  async create(params: CreateDataUser) {
    const userResponse = await User.create(params);

    await Promise.all([
      UserInformation.create({ userId: userResponse._id }),
      UserGoal.create({ userId: userResponse._id })
    ]);

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
    await Promise.all([
      User.deleteOne({ _id }),
      Meal.deleteMany({ userId: _id }),
      Water.deleteMany({ userId: _id }),
      UserGoal.deleteOne({ userId: _id }),
      UserInformation.deleteOne({ userId: _id })
    ]);
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