import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';

import $pages from './data.js';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$bus = $bus;
// app.config.globalProperties.$pages = $pages; don't need this after step 4

/* 3. In Vue 2 we could add global properties by just adding them to 
Vue.prototype.$[name of property]
but in Vue 3 it was taken away and the .globalProperties were provided to replicate above

But there is a better way;
We can provide information that we can INJECT into child components

note: the primary way we get data from parent to child is through props. Unfortunately Pages-List
is not a child but a view that you navigate through the router. 
Instead we can .provide our pages object


4. The first argument is the key which we refer to our pages, and then the value associated to that key..
    This will essentially provide our pages to our App component and all of it's children. 
    This is providing a global acessible object that we can access from any component BUT we can provide
    ANYTHING from any component and it will be available to ALL of it's children (direct child or any far down the hierachy).

    This isn't an automatic thing but we need to go into the components that need access to this and INJECT our pages
    Page-Viewer component
*/
app.provide('$pages', $pages)


app.mount('#app');

