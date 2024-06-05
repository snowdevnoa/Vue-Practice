<!-- 2. This will greatly simplify our Navbar-Link, as well as our Navbar and App
-->

<template>
  <li>
    <!-- 4. All we need to do is get rid of v-bind:class="activeClasses" and add 
    a prop called active-class and then we provide the css classes we want to apply
    to the active link so
    
    active-class="active emphasize"
  -->
    <router-link
      :to="`/${index}`"
      class="nav-link"
      active-class="active emphasize"
      v-bind:title="`This link goes to the ${page.link.text} page`"
      >{{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  /* 8. Now the active-classes object use the isActive prop so we can get rid of it  */
  props: ['page', 'index'],
  computed: {
    /*3. We are using the activeClasses object. This is a computed object that allowed us
    to set both the active and emphasize classes

       activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
    
    7. It also means since the active class is being handled by the router, we can get rid of the computed object
    */
 
  },
};
</script>

<!-- 6. To prove this is based on the URL, we're not going to click on the link, but change the URL. Change the index 0 in URL to 1 and voila.
We can get rid of the emphasize and we can get rid of the style

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>

It also means that since the active class is being handled by the router, we can get rid of the computed object

-->


<!-- 5. Check in browser (note we did not add this active-class prop to the Create Page link) -->


<!-- 9. By using just the active-clas prop on the router-link we were able to simplify the component. 
Go to Navbar component
-->