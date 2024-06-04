<!-- 10. Instead of outputting this a element, instead replace it with 
  
  <router-link></router-link> 
-->
<template>
  <li>
    <!-- 11. Now there is no href but a a to="" attribute and specify the path we want to go to  
    
    in this case it will be a slash and followed by whatever index. So we want to bind this (:to="") so that
    we can dynamically generate this using JS

    so our url is going to include the :to="`/${$route.params.index}`"

    so it doesn't matter what component we are in, the route will be the same as long as that component is displayed

    and then we want the index so instead will be to="`/${index}`" which will give our link
    -->
    <router-link
      :to="`/${index}`"
      class="nav-link"
      v-bind:class="activeClasses"
      v-bind:title="`This link goes to the ${page.link.text} page`"
      >{{ page.link.text }}
    </router-link>
    <!-- 12.  we don't need the click event v-on:click.prevent="$bus.$emit('navbarLinkActivated', index)"
      because it was supposed to tell our app that this was the active page or the v-bind:href="page.link.url"

      this will be a little different now because we arent actually navigating to those different pages.
      Why?
      Because the Page-Viewer component is ALREADY loaded

      Here's the thing about navigating using the vue router. If you navigate to a different component than everything is fine, you don't really need to do anything extra.
      However if you are navigating to a component that is currently loading, well you have to tell your application
      "Hey the route parameter changed, so load new data into that component"

      We can demonstrate this by adding a link to our CreatePage so let's do that in our Navbar component
    -->
  </li>
</template>

<script>
export default {
  props: ['page', 'index', 'isActive'],
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
