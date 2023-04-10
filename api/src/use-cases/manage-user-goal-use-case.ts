import { UserGoalRepository, DataUserGoal } from '../repositories/user-goal-repository';

export class ManageUserGoalUseCase {
  constructor(private userGoalRepository: UserGoalRepository) {}

  async update(params: DataUserGoal) {
    await this.userGoalRepository.update(params);
  }

  async getGoatById(userId: string) {
    return await this.userGoalRepository.getGoatById(userId);
  }
}