import { createApp } from 'vue';
import App from './App.vue'; // App is an object because that is what we are exporting (export default)

/* 3.3 1. after we did the 'npm install bootstrap --save', import the bootstrap css

advantages of importing it this way instead of a link in element in the index page:
    the build tools will pull that into the application and automatically inject it into the browser.
    Because we have these build tools, part of their job is to optimize the files from bootstrap/css and our src files.
    Anything else we import that is ran through the build tools will be optimized as well.

*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';



/* 1. This is our app component. The options object whenever we use the createApp 
Remember we have other templates(other components): navbar and page viewer

Go to step 2 in App.vue

*/

// 4. Import the App

createApp(App).mount('#app');


