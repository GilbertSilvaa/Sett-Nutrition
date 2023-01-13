import { UserGoalRepository, DataUserGoal } from '../user-goal-repository';
import { UserGoal } from '../../models/user-goal-model';

export class MongoUserGoalRepository implements UserGoalRepository {

  async update({ calories, water, dateGoal, userId }: DataUserGoal) {
    await UserGoal.updateOne({ userId }, {
      calories,
      water,
      dateGoal
    });
  }

  async getGoatById(userId: string) {
    return await UserGoal.findOne({ userId });
  }

}