import { 
  UserInformationRepository, 
  DataUserInformation 
} from '../repositories/user-information-repository';

export class ManageUserInformationUseCase {
  constructor(private userInformationRepository: UserInformationRepository) {}

  async update(params: DataUserInformation) {
    await this.userInformationRepository.update(params);
  }

  async getInformationById(userId: string) {
    return await this.userInformationRepository.getInformationById(userId);
  }

}