<!-- 5.Create the PageViewer Component and go copy the options object of the page viewer component from original html project -->
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

