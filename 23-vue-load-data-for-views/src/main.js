import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
/* 4. import the data store like the event bus  */
import $pages from './data.js';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$bus = $bus;

/* 5. Make the data store available as a global property so that components can have access
to the data store 
*/
app.config.globalProperties.$pages = $pages; 
//go back to Page-Viewer component
app.mount('#app');
