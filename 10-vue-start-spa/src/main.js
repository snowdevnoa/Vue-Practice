import { createApp } from 'vue';
import App from './App.vue' // App is an object because that is what we are exporting (export default)

/* 1. This is our app component. The options object whenever we use the createApp 


Remember we have other templates(other components): navbar and page viewer

Go to step 2 in App.vue

*/

// 4. Import the App 

createApp(App).mount('#app')