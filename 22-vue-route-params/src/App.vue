<template>
  <navbar v-bind:pages="pages" v-bind:active-page="activePage"> </navbar>
   <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  components: {
    Navbar,
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


