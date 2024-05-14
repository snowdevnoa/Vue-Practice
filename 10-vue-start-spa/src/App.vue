<!-- 2. this is the convention: we have a component that serves as a container for
our application  -->
<template>
  <!-- 9. Grab Navbar and PageViewer html element from index-->
  <navbar
      v-bind:pages="pages"
      v-bind:active-page="activePage"
      :nav-link-click="(index)=> activePage = index"
    ></navbar>
    <page-viewer v-bind:page="pages[activePage]"></page-viewer>
</template>

<script>
/*7. Import the PageViewer component 

we want to tell this App component we want to use our PageViewer and we do that by defining a 
'components' OPTION
*/

import PageViewer from './components/Page-Viewer.vue';
import Navbar from './components/Navbar.vue';

/* 3. We want to export a default object that contains the options that our application needs */
export default {
  // 8. components option, now repeat process for the navbar component
  components:{
    Navbar,
    PageViewer
  
  },
  data() {
    return {
      activePage: 0,
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
    };
  },
};
</script>
