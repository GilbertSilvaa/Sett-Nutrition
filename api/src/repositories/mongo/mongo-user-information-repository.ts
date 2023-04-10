import { 
  UserInformationRepository, 
  DataUserInformation 
} from '../user-information-repository';
import { UserInformation } from '../../models/user-information-model';

export class MongoUserInformationRepository implements UserInformationRepository {

  async update({ userId, ...params }: DataUserInformation) {
    await UserInformation.updateOne({ userId }, params);
  }

  async getInformationById(userId: string) {
    return await UserInformation.findOne({ userId });
  }
}