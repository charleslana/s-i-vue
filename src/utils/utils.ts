import IError from '@/interfaces/IError';
import LocalStorageService from '@/services/LocalStorageService';
import router from '@/router';
import showToast from '@/plugins/toast';
import ToastEnum from '@/enum/ToastEnum';

export const handleViewHeight = (): void => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};

export const handleToastError = (error: IError): void => {
  if (error.response) {
    if (error.response.status === 401) {
      return;
    }
    if (error.response.data.validation) {
      showToast(ToastEnum.Warning, error.response.data.validation.body.message);
      return;
    }
    showToast(ToastEnum.Error, error.response.data.message);
    return;
  }
  showToast(ToastEnum.Error, error.message);
};

export const validateUserLogged = async (): Promise<boolean> => {
  if (!LocalStorageService.getLogged()) {
    await router.push({ name: 'login' });
    return false;
  }
  return true;
};

export const removeSession = async (): Promise<void> => {
  LocalStorageService.removeToken();
  LocalStorageService.saveLogged(false);
  await router.push({ name: 'login' });
};

export const abbreviateNumber = (number: number): string => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number);
};

export const numberFormatter = (number: number): string => {
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
