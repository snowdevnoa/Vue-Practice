<template>
  <navbar
      v-bind:pages="pages"
      v-bind:active-page="activePage"
      :nav-link-click="(index)=> activePage = index"
    ></navbar>
    <page-viewer v-bind:page="pages[activePage]"></page-viewer>
</template>

<script>

import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar,
    PageViewer
  
  },
  data() {
    return {
      activePage: 0,
      pages: [
        {
          link: { text: 'Home', url: 'index.html' },
          pageTitle: 'Home Page',
          content: 'This is home content',
        },
        {
          link: { text: 'About', url: 'about.html' },
          pageTitle: 'About Page',
          content: 'This is about content',
        },
        {
          link: { text: 'Contact', url: 'contact.html' },
          pageTitle: 'Contact Page',
          content: 'This is contact content',
        },
      ],
    };
  },
};
</script>
