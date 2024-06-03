<template>
  <navbar v-bind:pages="pages" v-bind:active-page="activePage"> </navbar>
  <!-- 
    10.

  <div v-show="false">hide this content</div>
  <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>

  <create-page @page-created="pageCreated"> </create-page>  


    The router will be loading the information using the RouterView component. 
    The idea is that this is a placeholder so that whenever the view router navigates the user to a component, the component
    will display right here

    go to PageViewer component
   -->
  <router-view></router-view>
</template>

<script>
// import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';
// import CreatePage from './components/Create-Page.vue';

export default {
  components: {
    Navbar,
    // PageViewer,
    // CreatePage,
  },
  created() {
    this.getPages();
    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      ``;
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

<!-- Summary: 

  Now the question becomes how do we get our data? 

  The navbar is still displaying the links to those pages because we are still
  loading that data inside of our app component and we are passing those pages
  onto the navbar.

  but we effectively broken the functionality of this activePage data (line 2).
  because that's what we used in order to display the given page.

  The activePage was dependent upon knowing the index of the page it was currently displayed.
  That information is now in the URL and we can get that information from route params.

-->
