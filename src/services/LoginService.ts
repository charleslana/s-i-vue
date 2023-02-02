import api from '@/config/api';
import ILogin from '@/interfaces/ILogin';
import LocalStorageService from './LocalStorageService';
import router from '@/router';
import { handleToastError } from '@/utils/utils';
import { hideLoading, showLoading } from '@/plugins/loading';

export default class LoginService {
  public static async login(login: ILogin): Promise<void> {
    showLoading();
    await api
      .post('/user/login', {
        email: login.email,
        password: login.password,
      })
      .then(response => {
        LocalStorageService.saveLogin(login.email, login.password);
        LocalStorageService.saveToken(response.data.accessToken);
        LocalStorageService.saveLogged(true);
        router.push({ name: 'home' });
      })
      .catch(error => {
        handleToastError(error);
      })
      .finally(() => {
        hideLoading();
      });
  }
}
