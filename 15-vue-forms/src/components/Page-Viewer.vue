<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  /* 5. Define descriptors for your prop and prop validation

  This approach can be a little tedious because it changes the way we define the props for our components

  instead of using an array of just simple string values
  props: ['propName1', 'propName2']

  we would have to use an object where the property names are the names of our props, then there would be
  a descriptor object and a default value OMG THIS IS SIMIlAR TO TYPESCRIPT */
  props: {
    page: {
      type: Object,
      default(rawProps){ //if this was a simple value it would be a string, but since this is an object, we ould have to provide the factory function
        return{
          pageTitle: '',
          content: ''
        }
      }
    }
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
