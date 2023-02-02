import ToastEnum from '@/enum/ToastEnum';
import { useToast } from 'vue-toastification';

const toast = useToast();

const showToast = (toastEnum: ToastEnum, message: string): void => {
  switch (toastEnum) {
    case ToastEnum.Success:
      toast.success(message);
      break;
    case ToastEnum.Warning:
      toast.warning(message);
      break;
    default:
      toast.error(message);
      break;
  }
};

export default showToast;
