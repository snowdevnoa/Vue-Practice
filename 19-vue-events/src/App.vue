<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
  </navbar>

  <!-- 3.
We have bound something to pageCreated but we don't neessarily know what is.


5. This would be alot easier to read and understand what was going on if we were using the actual
SYNTAX for setting up the event handler

aka instead of v-bind:page-created="pageCreated" or :page-created="pageCreated"

we can use 
@page-created="pageCreated"
now we have a page-created event that we are handling with the pageCreated function

go to createPage component

-->
  <create-page @page-created="pageCreated"> </create-page>
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
    // 4. Until we look at the code and see oh it is a method.
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
