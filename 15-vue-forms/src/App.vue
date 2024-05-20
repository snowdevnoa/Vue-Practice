<!-- 
1.

Vue makes it easier to work with forms
 
 -->

<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
</navbar>

  <!-- <page-viewer 
  v-bind:page="pages[activePage]"
  ></page-viewer> -->

  <!-- 2.  let's focus on forms, so we will create a new page object that we will add to our pages array
    this component needs to have a callback, so the app will know when the page has been created
  
  -->

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
      let data = await res.json(); // don't forget to parse that into a js object
      this.pages = data;

    },

    /* 3. Define the method, lets take the page object then write it to the console for now */
    pageCreated(pageObj){
      console.log(pageObj)
    }
  },
};
</script>
