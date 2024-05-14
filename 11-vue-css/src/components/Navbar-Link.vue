<!-- 
  3.
   replace {active: activePage == index} with activeClasses where we bind our css classes
   we don't need this attribute anymore v-on:click.prevent="navLinkClick(index)", instead we can copy and paste this
    into the Navbar component in the navbar-link element as it automatically applied to the this a element. This way we don't need to define
    this navLinkClick both here and on the Navbar link. This click event will be placed on the a element 

-->

<template>
  <a
    class="nav-link"
    v-bind:class="activeClasses"
    v-bind:href="page.link.url"
    v-bind:title="`This link goes to the ${page.link.text} page`"
    >{{ page.link.text }}
  </a>
</template>

<script>
export default {
  props: ['page', 'isActive'],
  //  apply multiple classes whenever a link is active
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
<!-- 5. you may think that defining css here restricts it to the component only but that is false, you can add the emphasize css
class to let's say PageViewer component and it will appear

HOWEVER we CAN make them scoped by adding the 'scoped' attribute to the style elment
-->

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>

<!-- 7.  
  SUMMARY: when it comes to adding css to our project, we have several different options:
  we can install them as a dependency and import them.
  we can define css for our component: global or scoped
-->