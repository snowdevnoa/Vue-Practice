<!-- 1. Nested routes are routes that are nested inside of other routes. You want to use nested routes
when you want to build a UI that is structured such way that the components mirror the URL

example:
typical web apps where we are working with an indvidual resource. The resource being pages.
We have the URL for displaying individual pages, all we have to do is suppply index and we see the content.

Let's say we want a management section so we can manage those pages:
Well the URL would be:
    /pages 
and then from there we would have a structure of working pages. So that if we wanted to create a page
the url would be:
    /pages/create
if we wanted to edit an exisitng page it would be:
    /pages/[index number]/edit
and if we wanted to delete it would be the same thing:
    /pages/[index]/delete

    Go to routes.js
-->

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
