import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
/*8. import the router to use*/
import router from './routes';

const app = createApp(App);

/*9. Call the use method on our app. 
     The .use() lets us pass a plugin and the router instance is a plugin 
     so that we tell our application to use our router  -> mody our global property -> mount our application

     go to App.vue component
*/
app.use(router);
app.config.globalProperties.$bus = $bus;
app.mount('#app');

/* 1. A router in the sense of software development, takes user input and routes it to some piece
of code that is going to handle that input


For example:
SSR applications, there is a routing engine that is looking for incoming request and it will route those
request to different methods on a controller


In Vue, we have a router to route URLs to a company, it essentially an individual component as a different page
but the entire application is loaded within a single page*/
