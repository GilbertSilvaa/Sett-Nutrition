import { UserGoalRepository, DataUserGoal } from '../user-goal-repository';
import { UserGoal } from '../../models/user-goal-model';

export class MongoUserGoalRepository implements UserGoalRepository {

  async update({ userId, ...params }: DataUserGoal) {
    await UserGoal.updateOne({ userId }, params);
  }

  async getGoatById(userId: string) {
    return await UserGoal.findOne({ userId });
  }

}