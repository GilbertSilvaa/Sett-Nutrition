import { 
  UserInformationRepository, 
  DataUserInformation 
} from '../repositories/user-information-repository';

export class ManageUserInformationUseCase {
  constructor(private userInformationRepository: UserInformationRepository) {}

  async update({ weight, height, gender, age, bmr, imc, activityLevel, userId }: DataUserInformation) {
    await this.userInformationRepository.update({
      weight,
      height,
      gender,
      age,
      bmr,
      imc,
      userId,
      activityLevel
    });
  }

  async getInformationById(userId: string) {
    return await this.userInformationRepository.getInformationById(userId);
  }

}