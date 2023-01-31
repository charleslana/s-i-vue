import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'animate.css';
import './main.css';
import { handleViewHeight } from './utils/utils';

handleViewHeight();
createApp(App).use(router).mount('#app');
