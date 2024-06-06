<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'],
  /*5. Provide the inject option which is an array of keys that we want to inject
  
  Go to Navbar to inject the same then Pages-List component
  */
  inject: ['$pages'],
  created() {
    this.page = this.$pages.getSinglePage(this.index);
  },
  data() {
    return {
      page: null,
    };
  },
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
