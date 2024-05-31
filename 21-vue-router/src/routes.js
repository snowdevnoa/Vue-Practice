/* 2. First thing to do is define our routes for our router and import two functions: 

createRouter -  name explains itself, 
                but when we create the router we need to  tell it how to handle the URL and since
                we don't have any backend SSA we will use createWebHashHistory
createWebHashHistory 

*/

/*6. import the components*/
import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/Page-Viewer.vue';
import CreatePage from './components/Create-Page.vue';

/*

3. pass in an object that takes in two properties: 
    history - how the history will be treated
    routes - an array of objects. 
            The object will have two things:
                The path property and the URL value
                The component property and the component we specify will be displayed

*/
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
            /* 4. We already have something that is already available that is responsible for displaying content our PageViewer
        
        However the PageViewer is very dependent on the data it recieves (it needs to be able to display the individual pages) and we would pass that 
        page through props.

        Now that we are using a router, we can't really use props. Well we can but all the data that is going to be passed to a component
        is now going to be done through the URL as opposed to a parent component. 
        */
        {path: '/', component: PageViewer},

        /* 5. Add another route for the CreatePage component 
        */
        {path: '/create', component: CreatePage} 
    ]
}) 


// 7. export the router so we can use this in our main.js file
export default router;