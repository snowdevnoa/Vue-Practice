<!-- 4. Of course App is the top of the hierachy, but if there was anything higher than App, that event will not bubble up.

This can be very cubersome because there are times we need to listen for an event deep within the component hiearchy.
-->

<template>
  <navbar v-bind:pages="pages" v-bind:active-page="activePage">
    <!-- 16. Listen to the event -->
  </navbar>

  <!-- 18. Uncommennt and test -->
  <div v-show="false">hide this content</div>
  <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>

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
    /* 17. Listen for the global event so that then we can set the activePage value to whatever the index is*/
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

<!-- In prior versions of Vue, what we would do is create a 
  
  GLOBAL EVENT BUS  
  it allows us to emit events globally so that we could emit them from any component and listen for those events inside
  of any other component regardless of the relationship between those components.

  The problem now is that Vue3 we don't have that ability. We have to write our own global event bus code
-->
