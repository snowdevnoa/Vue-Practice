<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['page'],
};
</script>

<!-- 6. we can define our own with the same class name as long as the other css style in the other component has the scoped attribute -->
<style scoped>
.emphasize {
  color: blue;
}
</style>
