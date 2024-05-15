<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-for="(page, index) in pages" class="nav-item active" :key="index">
          <navbar-link
            v-bind:page="page"
            v-bind:isActive="activePage == index"
            v-on:click.prevent="navLinkClick(index)"
          >
          </navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" v-on:click.prevent="changeTheme">
          {{ useDarkNavbar ? 'Change to light mode' : 'Change to dark mode' }}
        </button>
      </form>
    </div>
  </nav>
</template>

<script>

import NavbarLink from './Navbar-Link.vue';
export default {
  components: {
    NavbarLink,
  },
  props: ['pages', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {
    changeTheme() {
      if (this.theme == 'light') {
        this.theme = 'dark';
      } else {
        this.theme = 'light';
      }
    },
  },
};
</script>
