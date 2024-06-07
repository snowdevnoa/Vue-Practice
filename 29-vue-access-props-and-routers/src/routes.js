import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/Page-Viewer.vue';
import CreatePage from './views/Create-Page.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/Pages-List.vue';
/* 8. import the Page-Edit component and add it as a child to the pages route*/
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
        /* 9. The path is the index param then edit and the component is the Page-Edit component*/
        { path: ':index/edit', component: PageEdit, props: true },
      ],
    },
  ],
});

export default router;
