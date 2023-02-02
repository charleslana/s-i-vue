import router from '@/router';
import LocalStorageService from '@/services/LocalStorageService';
import { useToast } from 'vue-toastification';

export const handleViewHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleToastError = (error: any) => {
  const toast = useToast();
  if (error.response) {
    if (error.response.data.validation) {
      toast.warning(error.response.data.validation.body.message);
      return;
    }
    toast.error(error.response.data.message);
    return;
  }
  toast.error(error.message);
};

export const validateUserLogged = async (): Promise<boolean> => {
  if (!LocalStorageService.getLogged()) {
    await router.push({ name: 'login' });
    return false;
  }
  return true;
};
