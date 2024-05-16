<!-- 

  runtime-core.esm-bundler.js:412 Uncaught TypeError: Cannot read properties of undefined (reading 'pageTitle')

  1. Because pages is initialized as an empty array. It is not populated UNTIL the component is initialized, the data is process,
  and the created hook is executed. So there is a tiny brief moment where pages is empty and the page viewer is trying to retrieve the element at index 0 from 
  an empty array


  couple different ways for solution:
  
  
 -->

<template>
  <navbar
    v-bind:pages="pages"
    v-bind:active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  >
</navbar>
<!-- 
  2. the first way and most straightforward like normal js is to check if there are any elements inside
  the array using the vue if directive. can be used on ANY element, so html element or component as long as we provide truthy/fasley value:
  v-if="pages.length > 0"

  if the value of the if directive is true, then page viewer is going to be output in the document.
  if the value is false, then it won't be in the document at all

  if we had set v-if="false" then it would not show the page content

  3.
  There's a similar directive callued v-show, it uses css to show/hide an element. HOWEVER if we did
  v-show"pages.length>0" we would still run into an issue because from the standpoint of the page viewer, it is SILL in the document, just hidden.

  v-if completely removes it if it is false



  4. The second way is to provide a default value for the page prop, and we would do that inside the
  page viewer component go to page viewer
-->
  <page-viewer 
  v-if="pages.length > 0"
  v-bind:page="pages[activePage]"
  ></page-viewer>
  <div v-show="false">Content</div>
</template>

<script>
import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    PageViewer,
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
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
