import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/Page-Viewer.vue';
import CreatePage from './views/Create-Page.vue';
/* 10. We do need to import the Pages component */
import Pages from './views/Pages.vue';
import PagesList from './views/Pages-List.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    /* 2. create a route with path being /pages that will be handled by a component called pages
     */
    {
      path: '/pages',
      component: Pages,
      /* 8. So I want to make our /create route A CHILD of our /pages route and we do that
      by adding another property to the route called:

      children: [array of other route objects]

    */
      children: [
        /*   11. Let's create a component to list all the pages. To do this the path will be an empty string, aka this
        is the default of the pages route */
        {path: '', component: PagesList},
        { path: 'create', component: CreatePage }], // 10. Child routs does not need slash
    },

    // { path: '/create', component: CreatePage }, 9. Copy and past this to the array above
  ],
});


export default router;

/* 3. In common Vue projects, you will typically see a folder called 'Views'.

Views are components that handle routes so in our case PageViewer and CreatePage. 
They are essentially Views because they handle our routes. So create a new folder called views

Create a Pages.vue component in the view folder
*/
