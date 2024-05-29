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
        <!-- 6. Now it doesn't make sense to listen to any knd of event here but instead emit
        an event from inside the Navbar-Link component -->

        <!-- 15. Add the index prop to pass down to navbar-link -->
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item active"
          :key="index"
          :index="index"
          v-bind:page="page"
          v-bind:isActive="activePage == index"
          v-on:activated="$emit('activated')"
        >
          <!-- 8. ^ inside of the navbar-link we would listen to that activated event -> THEN we would emit that so it can be pass to the App component.
        
        It works but it's very tedius and it makes our code much more complex and difficult to understand
        
        go to App component
        
        -->
        </navbar-link>
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

  created() {
    this.getThemeSettings();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  props: ['pages', 'activePage'],
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
