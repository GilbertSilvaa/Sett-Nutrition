import { 
  UserInformationRepository, 
  DataUserInformation 
} from '../user-information-repository';
import { UserInformation } from '../../models/user-information-model';

export class MongoUserInformationRepository implements UserInformationRepository {

  async update({ weight, height, age, gender, bmr, imc, userId }: DataUserInformation) {
    await UserInformation.updateOne({ userId }, {
      weight,
      height,
      age,
      gender,
      bmr,
      imc
    });
  }

  async getInformationById(userId: string) {
    return await UserInformation.findOne({ userId });
  }
}