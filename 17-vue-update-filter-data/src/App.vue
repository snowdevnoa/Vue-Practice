
<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
</navbar>
  <create-page
    v-bind:page-created="pageCreated"
  >
  </create-page>

</template>

<script>
import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/Create-Page.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
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

   
    pageCreated(pageObj){
      /* 2. Modify the pages array, push in the new page object.
      
      Anything that modifies or mutates our pages array is going to automatically signify to Vue that
      this data changed, updates all of the UI that uses the pages array.

      So any built in array method: push, pop, split, splice, reverse

      those changes will be reflected in the UI
      
      */
      this.pages.push(pageObj)
    }
  },
};
</script>
