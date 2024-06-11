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
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item active"
          :key="index"
          :index="index"
          v-bind:page="page"
        >
        </navbar-link>
        <router-link to="/pages" class="nav-link" active-class="active"
          >Pages
        </router-link>
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
  /* 13. inject $bus event as well because this is the Options API we just the inject option*/
  inject: ['$pages', '$bus'],

  created() {
    this.getThemeSettings();
    this.pages = this.$pages.getAllPages();
    /* 14. Set up the event listener for that page updated. Call the on method and listen for the event being emitted so it is page-updated, and second
    argument is the function that will execute*/
    this.$bus.$on('page-updated', () => {
      /*15. update our pages with the new pages. 

      this.pages = this.$pages.getAllPages();
      
      This should work right? nope, only when we refresh

      So why didn't it work? 
      Simple, because of this right here:  this.pages = this.$pages.getAllPages();
      
      go to data.js

      17. Whenever we set the pages property to get all pages. It is watching that ARRAY object. Even though we update the content of one objects inside of that array,
      it is NOT watching the individual object.
      Now if we added an item to an array it would recognize the array changed but not watching the inidivual objects inside the array.

      What we can do is this. We can assign a new array to the pages data property and we can fill it by spreading out (array spread operator) the array from the getAllPages.
      */
      this.pages = [...this.$pages.getAllPages()];
      /* ^ 18. we are creating a new array object and populating it with the elements from getAllPages. So everytime page updated occurs, it's going to be a new array so that's going to
      tell the Navbar that the pages array changed, it's time to fetch that information and update what's in the browser*/
    });
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      theme: 'light',
      useDarkNavbar: false,
      pages: [],
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
      this.storeThemeSettings();
    },
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
