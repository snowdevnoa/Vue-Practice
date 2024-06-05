/* 1. In this application we are keeping track of an active page

One feature that is built in Vue Router is to keep track on the active link
that is based upon the URL, instead of keeping track of something internally
it is looking at the URL and matching that to the paths we defined in the routes
so it knows what link is active.



All we need to do is tell it what class that we want it to 
use when a link is active


Go to Navbar-Link component

*/


import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/Page-Viewer.vue';
import CreatePage from './components/Create-Page.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    { path: '/create', component: CreatePage },
  ],
});

export default router;
