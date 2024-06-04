<!-- 1. In the last lesson we discussed how we are going to get data into our component
  by relying on the URL to give us the index of the page we want to display. 
  So that inside the PageViewer component we can just fetch the page.


Question: how do we do that?

Solution:
Typical pattern is to used a centralized data store that is ideally react — meaning that anytime
that there were changes made to our data (either by editing a page, creating a new page, and adding it to the data store)
then the application would automatically update.


There is a data store that does exactly that called VueX BUT WE ARE NOT READY YET

Instead let's write it ourselves:

Simply an object that gives us access to our data. In this particular implementation, anytime we make changes to our data
we need to tell our application, hey the data is changed, time to reload the data.

Thankfully we have a global event bus that can help fatilitate that.

Create a file called data.js and go to there
-->

<template>
  <div v-if="page" class="container">
    <!-- 8. Output page title and content -->
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params);
    /* 6. Fetch the page from local storage from the global property of the data store*/
    this.page = this.$pages.getSinglePage(this.$route.params.index);
  },
  /* 7. define the page and initailize as null so that way we can use the v-if */
  data() {
    return {
      page: null,
    };
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>

<!-- 9. Now we have not coonnected the navlinks to navigate using the router

go to Navbar-Link component
-->