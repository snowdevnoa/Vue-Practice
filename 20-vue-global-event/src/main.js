import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
// 11. import the object
import $bus from './utils/Events';


/*We need to break up our line of code  

createApp(App).mount('#app');
*/

const app = createApp(App)

/*12. so that inbetween the app we can add to our configuration a globalProperties property

and this allows us to add properties to every component within our application

app.config.globalProperties.[global event name]
*/

app.config.globalProperties.$bus = $bus; //$eventBus



app.mount('#app')