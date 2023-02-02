import { ActiveLoader, useLoading } from 'vue-loading-overlay';

const $loading = useLoading({
  backgroundColor: '#131313',
  transition: 'none',
  zIndex: 2000,
  loader: 'bars',
  color: '#fff',
});

let loading: ActiveLoader | null;

export const showLoading = () => {
  document.body.style.overflow = 'hidden';
  loading = $loading.show();
};

export const hideLoading = () => {
  document.body.style.overflow = '';
  if (loading) {
    loading.hide();
    loading = null;
  }
};
