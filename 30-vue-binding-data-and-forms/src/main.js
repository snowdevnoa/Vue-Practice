import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data.js';

const app = createApp(App);

app.use(router);
/*11. we need that bus event but it is currently set up as a global prop. So we will essentially do the same thing for the pages 

change app.config.globalProperties.$bus = $bus;

*/
app.provide('$bus', $bus) // we need to inject this in Page-Edit component

app.provide('$pages', $pages)



app.mount('#app');

