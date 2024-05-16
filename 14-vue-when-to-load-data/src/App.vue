<!-- 
1.

When should you load data?

Complete subjective, depends on application & opinion

two criteria to help:
is the data used across multiple components?
or is the data specific to a single component?

  
let's look at an example for both below  
 -->

<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
</navbar>
  <page-viewer 
  v-bind:page="pages[activePage]"
  ></page-viewer>
  <div v-show="false">Content</div>
</template>

<!-- 3. The pages array is ALSO used to display the contents of the current page.
  So while the page viewer doesn't necessarily use the pages array inside the component,
  it is STILL DEPENDENT


  since this pages data is used across MULTIPLE components, we would want to load this as soon as possible
  aka before the components are created and loaded
-->

<script>
import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    PageViewer,
  },
  /* 4. SO IT MADE SENSE TO LOAD INSIDE OF THE APP COMPONENT using the created hook*/
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
      /* 2. Now we have the pages array inside of the APP component. This is the pages the navbar component 
      is using to generate the links to the pages*/
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('./pages.json');
      let data = await res.json(); // don't forget to parse that into a js object
      this.pages = data;

    },
  },
};
</script>
