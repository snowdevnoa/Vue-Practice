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
  /*
  
  5. The navbar has data. Of course it has data being supplied through the props aka pages, 
  but it does have data that is specific to this component and only this component

  aka the theme and useDarkNavbar.

  Now in the grand scheme of things, this data isn't as important as the pages, but this is
  part of providing the user experience and practice

  so let's store this information and when they revisit it'll load the settings they prefer

  now we can make an argument that 'settings' is an application level component, however it can also be argued 
  that the setting should be loaded by whatever component is using that setting.


let's get started, we can approach this in a variety of ways:

  */

  /* 8. We will call and get the theme settings on the created lifecycle hook*/
  created() {
    this.getThemeSettings();
  },
  props: ['pages', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'light',
      useDarkNavbar: false,
    };
  },
  methods: {
    changeTheme() {
      if (this.theme == 'light') {
        this.theme = 'dark';
        this.useDarkNavbar = !this.useDarkNavbar;
      } else {
        this.theme = 'light';
        this.useDarkNavbar = !this.useDarkNavbar;
      }

      /*7. We need to store the theme setting when we change the theme */
      this.storeThemeSettings();
    },
    /* 6. For this lesson, we will add two methods and utilize local storage
    
      first is to store the theme setting.
    */
    storeThemeSettings() {
      localStorage.setItem('theme', this.theme);
      localStorage.setItem('themeText', this.useDarkNavbar);
    },
    getThemeSettings() {
      let theme = localStorage.getItem('theme');
      if (theme) {
        this.theme = theme;
      }
      let themeText = localStorage.getItem('themeText');

      if (themeText) {
        this.useDarkNavbar = themeText;
      }
    },
  },
};
</script>

<!-- Summary:

  As we add more settings, it might make more sense to load upfront so we don't hit local storage multiple times
  all at the same time. But then again it is application dependent.

  also don't be afraid to make changes to your application design

-->