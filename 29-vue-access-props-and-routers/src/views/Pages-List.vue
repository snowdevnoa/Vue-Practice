<!-- 1. 
  I want to be able to navigate to the edit for any one fo the pages. 
  Let's make it where a row is clickable and we can navigate to the route

-->

<template>
  <div>
    <!-- Let's have a subtitle to distinct this -->
    <h4>Pages</h4>
    <div class="text-end">
      <router-link to="/pages/create" class="btn btn-primary btn-sm"
        >New Page</router-link
      >
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Link Text</th>
          <th>Is Published</th>
        </tr>
      </thead>
      <tbody>
        <!--  2. now the tr element doesn't have an href attribute so we need to write code to be able to do that -->
        <tr
          v-for="(page, index) in $pages.getAllPages()"
          v-bind:key="index"
          v-on:click="goToPage(index)"
        >
          <td>{{ page.pageTitle }}</td>
          <td>{{ page.link.text }}</td>
          <td>{{ page.published ? 'yes' : 'no' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
/*4. importing the useRouter . Now we haven't specifically accessed the router using the options api, 
but we did use the this.$route.params if we needed to*/
import { useRouter } from 'vue-router';

const data = reactive({ counter: 0 });
//
const $pages = inject('$pages');
/* 5. Create an instance of the router to call the useRouter to get access to the router */
const router = useRouter();

/* 3. Navigate to the page by creating a function that uses the router. To get access to the router we neeed
to import the useRouter*/
function goToPage(index) {
  /*6. Call the push method to push in the path where we want to navigate to (object with the path property) */
  router.push({ path: `pages/${index}/edit` });
  /*7. We don't have the Page-Edit view so let's create one and go to it and add a route to this view and go to router.js*/
}
</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
