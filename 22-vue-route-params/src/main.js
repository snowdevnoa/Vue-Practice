import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
/*8. import the router to use*/
import router from './routes';

const app = createApp(App);


app.use(router);
app.config.globalProperties.$bus = $bus;
app.mount('#app');
