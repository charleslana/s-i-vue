import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'animate.css';
import './main.css';
import { handleViewHeight } from './utils/utils';
import Toast, { PluginOptions, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

handleViewHeight();
const app = createApp(App);
app.use(router);
const toastOptions: PluginOptions = {
  draggable: false,
  position: POSITION.TOP_CENTER,
  transition: 'none',
  timeout: 4000,
};
app.use(Toast, toastOptions);
app.use(LoadingPlugin);
app.mount('#app');
