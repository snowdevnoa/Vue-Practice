<template>
  <navbar> </navbar>
  
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  components: {
    Navbar,
  },
  created() {
  },
  data() {
    return {
      pages: [],
    };
  },
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
