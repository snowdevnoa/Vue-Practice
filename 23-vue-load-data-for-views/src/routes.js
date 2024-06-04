import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/Page-Viewer.vue';
import CreatePage from './components/Create-Page.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer },
    { path: '/create', component: CreatePage },
  ],
});

export default router;
