import { UserGoalRepository, DataUserGoal } from '../repositories/user-goal-repository';

export class ManageUserGoalUseCase {
  constructor(private userGoalRepository: UserGoalRepository) {}

  async update({ calories, water, userId }: DataUserGoal) {
    await this.userGoalRepository.update({
      calories,
      water,
      userId
    });
  }

  async getGoatById(userId: string) {
    return await this.userGoalRepository.getGoatById(userId);
  }
}