<!-- 5. For example let's refactor the navbar link so that inside of the navbar link we have the li element

  Generate it here instead of navbar cause it makes more sense. Meaning we need to take the foor loop from the Navbar component

-->
<template>
  <!-- 7. So that whenever we click on a link we will set up the event listener to emit an event.
  
      The only component that needs to know the link has been clicked is actually the app component because that's where we do something.

      In order for the App component to know that the activated event has occured, we would have to CHAIN events.
  -->
  <li>
    <!-- 13. Now we can use our event $bus object-->
    <a
      class="nav-link"
      v-bind:class="activeClasses"
      v-bind:href="page.link.url"
      v-bind:title="`This link goes to the ${page.link.text} page`"
      v-on:click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{ page.link.text }}
    </a>
  </li>
</template>

<script>
export default {
  props: ['page', 'index', 'isActive'], // 14. Add index as a prop, go to Navbar component
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
