<!-- 1. Problem: If we navigate to a page that uses the same component, the Home and About Page (both use the Page-Viewer component), 
  even though the value/url changes, the content remains the same.

why? The Page-Viewer component is already loaded into application and it is loaded to whatever page it
first initialized to

Even though the route params changed, the Page-Viewer component doesn't know that it changed
so it needs to update th page appropriately.

Solution: Use a watcher
-->

<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  /* 
      4. go to routes.js for second way 

      5. The value of index is passed as a prop now so we must define the prop
       */
  props: ['index'],
  created() {
    this.page = this.$pages.getSinglePage(this.index); // 6. update this from this.$route.params.index to this.index
    /* 3. Self research from vue documentation
      this.$watch(
      () => this.$route.params.index,
      (newIndex, oldIndex) => {
        if (newIndex) {
          this.page = this.$pages.getSinglePage(this.$route.params.index);
        }
      }
    );
    

    nevermind that is right, we will set up a watcher programatically using the $watch method.
    The first argument is a function and the return value is whatever we want to watch so in this, the route param
    but if we were in a situation where a component relies on multiple params, it would make sense just to watch 
    for the params itself
    The second argument is the argument that will execute when the params change
    
    this.$watch(
      () => this.$route.params,
      (newParams, oldParams) => {
        this.page = this.$pages.getSinglePage(newParams.index);
      }
    );
    */
  },
  data() {
    return {
      page: null,
    };
  },
  /* 2. Use the watch option

    this would normally be a simple identifier like a data property like page or a prop
    however in this case there are two ways to do this

    7. NOW that we have a simple identifier, we can use the watch option
  */
  watch: {
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
