
<template>
  <li>

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
