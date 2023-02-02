import api from '@/config/api';
import IRegister from '@/interfaces/IRegister';
import LoginService from './LoginService';
import { handleToastError } from '@/utils/utils';
import { hideLoading, showLoading } from '@/plugins/loading';

export default class RegisterService {
  public static async save(register: IRegister): Promise<void> {
    showLoading();
    await api
      .post('/user', {
        email: register.email,
        password: register.password,
        passwordConfirmation: register.passwordConfirmation,
      })
      .then(() => {
        hideLoading();
        LoginService.login({
          email: register.email,
          password: register.password,
        });
      })
      .catch(error => {
        handleToastError(error);
        hideLoading();
      });
  }
}
