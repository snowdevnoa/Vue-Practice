<template>
  <div class="container">
    <!-- <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p> 
  
    11. Change this to some text for example
  -->
    <h1 class="emphasize">Page Title</h1>
    <p>content</p>
<!-- 12. If we wanted to navigate to a page, we would have to say '/#/create' in the url  -->
  </div>
</template>

<script>
export default {
  props: {
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
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>

<!-- Summary: 

  Now the question becomes how do we get our data? 

  So the 

-->