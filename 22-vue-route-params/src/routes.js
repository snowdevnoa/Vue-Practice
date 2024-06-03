
import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/Page-Viewer.vue';
import CreatePage from './components/Create-Page.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        /*1. All the data that PageViewer is going to rely on is going to come from our URL
        
        We need to denote inside of our route that there is unique identifier. We do that with
        what's called a paramater:
        
        :[name of param] 

        */
        {path: '/:index?', component: PageViewer},
        /*
            2. 
            console displays [Vue Router warn]: No match found for location with path "/"

            Fix:
            If we don't supply an index, it'll provide the feault page. Either index 0 or the lowest page that is published.
            But if we do supply an index, it'll display a page with the index of 1
            Add a question mark after index to make it OPTIONAL and fix the problem. Now index is optional and an empty string


            3. So now the question is how do we retreive that value of that index param. Go to PageViewer component
        */

        {path: '/create', component: CreatePage} 
    ]
}) 


export default router;