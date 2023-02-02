import LocalStorageService from '@/services/LocalStorageService';
import { removeSession } from '@/utils/utils';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(
  config => {
    const token = LocalStorageService.getToken();
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        await removeSession();
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
