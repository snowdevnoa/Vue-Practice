import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/Page-Viewer.vue';
import CreatePage from './components/Create-Page.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    /* 4.The second way is to tell our application that for this route, we want the params to be passed as props. 
          so we add in the props: true property
    */
    { path: '/:index?', component: PageViewer, props: true },
    { path: '/create', component: CreatePage },
  ],
});

export default router;
