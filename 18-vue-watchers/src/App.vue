<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
  </navbar>
  <create-page v-bind:page-created="pageCreated"> </create-page>
</template>

<script>
import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/Create-Page.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('./pages.json');
      let data = await res.json();
      this.pages = data;
    },

    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
