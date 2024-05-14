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
          <!-- 2.
            <a
            class="nav-link"
            :class="{ active: activePage == index }"
            v-bind:href="page.link.url"
            :title="`This link goes to the ${page.link.text} page`"
            v-on:click.prevent="navLinkClick(index)"
            >{{ page.link.text }}
          </a> 
        
        turn this into a navbar-link component
        why?
        by breaking this functionality out, we now have a component that has a purpose of displaying a single link and the different state of that link
        -->
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
/*  4. this navLinkClick won't work unless we import the navlink element */
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
