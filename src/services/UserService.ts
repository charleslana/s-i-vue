import api from '@/config/api';
import IUser from '@/interfaces/IUser';
import showToast from '@/plugins/toast';
import ToastEnum from '@/enum/ToastEnum';
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
        user.email = response.data.email;
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

  public static async updateName(name: string): Promise<string | null> {
    let username = null;
    showLoading();
    await api
      .put('/user/change-name', {
        name: name,
      })
      .then(response => {
        username = name;
        showToast(ToastEnum.Success, response.data.message);
      })
      .catch(error => {
        handleToastError(error);
      })
      .finally(() => {
        hideLoading();
      });
    return username;
  }
}
