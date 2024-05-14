<!-- 5.Create the PageViewer Component and gocopy the options object of the page viewer component from original html project -->
<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['page'],
  /*
  6. move the template into the template element above
  template: `
          <div class="container">
            <h1>{{page.pageTitle}}</h1>
            <p>{{page.content}}</p>
          </div>
          `,

          go to step 7 in App.vue
   */
};
</script>

<!-- 3.3 6. we can define our own with the same class name as long as the other css style in the other component has the scoped attribute -->
<style scoped>
.emphasize {
  color: blue;
}
</style>
