<template>
  <!-- 13. we can get rid of the active-page 
  
  
  17. We can also get rid of the pages prop and the reason why we are getting rid of 
    the pages all together inside of App is because now that we have our data centralized, the navbar can load the data itself.

    Go to Navbar
-->
  <navbar v-bind:pages="pages"> </navbar>
  <router-view></router-view>
</template>

<script>
import CreatePage from './components/Create-Page.vue';
import Navbar from './components/Navbar.vue';
import PageViewer from './components/Page-Viewer.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  created() {
    /* 14. Get rid of these
      this.getPages();

      this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index;
    });    
    */
  },
  data() {
    return {
      // activePage: 0, 15. get rid of this
      pages: [],
    };
  },
  methods: {
    /*16. This as well  
        async getPages() {
      ``;
      let res = await fetch('./pages.json');
      let data = await res.json();
      this.pages = data;
    },
    */
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
