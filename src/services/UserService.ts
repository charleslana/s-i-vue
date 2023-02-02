import api from '@/config/api';
import IUser from '@/interfaces/IUser';
import { handleToastError } from '@/utils/utils';
import { hideLoading, showLoading } from '@/plugins/loading';

export default class UserService {
  public static async fetchUserDetail(): Promise<IUser> {
    const user: IUser = {};
    showLoading();
    await api
      .get('/user/profile/detail')
      .then(response => {
        user.name = response.data.name;
        user.belly = response.data.belly;
        user.experience = response.data.experience;
        user.gem = response.data.gem;
        user.level = response.data.level;
        user.stamina = response.data.stamina;
      })
      .catch(error => {
        handleToastError(error);
      })
      .finally(() => {
        hideLoading();
      });
    return user;
  }
}
