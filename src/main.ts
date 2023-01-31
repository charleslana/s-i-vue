import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'animate.css';
import './main.css';
import { handleViewHeight } from './utils/utils';
import Toast, { PluginOptions, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

handleViewHeight();
const app = createApp(App);
app.use(router);
const options: PluginOptions = {
  draggable: false,
  position: POSITION.TOP_CENTER,
  transition: 'none',
};
app.use(Toast, options);
app.mount('#app');
