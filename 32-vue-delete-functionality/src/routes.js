import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/Page-Viewer.vue';
import CreatePage from './views/Create-Page.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/Pages-List.vue';
import PageEdit from './views/Page-Edit.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    {
      path: '/pages',
      component: Pages,
      children: [
        { path: '', component: PagesList },
        { path: 'create', component: CreatePage },
        { path: ':index/edit', component: PageEdit, props: true },
      ],
    },
  ],
});

export default router;
