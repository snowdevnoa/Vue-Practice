<!-- 

  1.
  
  How do we load data so that the user can access that data when the app initially loads?

  Well we use this thing
 -->

<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
</navbar>
  <page-viewer v-bind:page="pages[activePage]"></page-viewer>
  <!-- 6. We can get an error in the console that the page title in page viewer is undefined because the page object is empty. 
  before our data has been loaded, pages is an empty array so undefined is being bound to the page prop for the page viewer -->
</template>

<script>
import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    PageViewer,
  },
  /* 5. All we need to do is add the "created" as a method to our options object so this is just another option*/
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      /* 
       3. we can move this data and create a new file called pages.json to place there
    
      pages: [
        {
          link: { text: 'Home', url: 'index.html' },
          pageTitle: 'Home Page',
          content: 'This is home content',
        },
        {
          link: { text: 'About', url: 'about.html' },
          pageTitle: 'About Page',
          content: 'This is about content',
        },
        {
          link: { text: 'Contact', url: 'contact.html' },
          pageTitle: 'Contact Page',
          content: 'This is contact content',
        },
      ], 
      pages: this.getPages(),*/
      pages: [],
    };
  },
  /* 2. One way we can do is add a methods option called getPages  */
  methods: {
    async getPages() {
      let res = await fetch('./pages.json');
      let data = await res.json(); // don't forget to parse that into a js object
      this.pages = data;

    },
  },
};
</script>

<!-- 4. But the methods option is a poor way of handling it, instead we can use this thing called LifeCycle
Hooks

https://vuejs.org/guide/essentials/lifecycle.html


there is a beforeCreate event that will occur in the component's lifecycle, and we can HOOK into
and execute code when the component instance is initialized. The props are resolved, but there is no processing as
far as the component's data and computed property


In our case, we DON'T want to use beforeCreate because we want the data and computed values to already be processed.

There is this "created" event which is after the data and computed property has been initialized but before the component
is loaded into the document in the browser. THIS IS IDEALLY WHERE WE WANT TO LOAD OUR CONTENT. 

This means that the data is processed so that whenever we load our data, Vue is able to react to that change. But it's before it is visible to the browser

-->
