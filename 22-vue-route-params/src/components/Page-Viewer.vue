<template>
  <div class="container">
    <h1 class="emphasize">Page Title</h1>
    <!-- 7. Replace the content with the index params -->
    <p>{{ $route.params.index }}</p>
  </div>
</template>

<script>
export default {
  /*props: {
    page: {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: '',
          content: '',
        };
      },
    },
  },
  
  4. We don't need our page prop anymore as we are using a router, this time we add a created hook
  
    In the last lesson whenever we created our router, we added it to our app with the use method. Because of this we get a 
    special property in ALL of our component called this.$route -> this refers to the route that is currently being handled by this PageViewer component

    then we have a route property called params
    this.$route.params -> which is an object that contains all the params inside our route path

    we only have one which is index

  */
  created() {
    /* 5. check the console remember if no value it is an empty string */
    console.log(this.$route.params);

    /* 6. There is a caveat where it doesn't matter what we include in the index param, it could be a long string of characters
    so we need to do some validation  */
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
