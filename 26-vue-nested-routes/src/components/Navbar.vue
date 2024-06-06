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
        <!-- 12. Don't forget to update the route -->
        <router-link to="/pages/create" class="nav-link" active-class="active"
          >Create Page
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

  created() {
    this.getThemeSettings();
    this.pages = this.$pages.getAllPages();
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
