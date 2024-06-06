<!-- 1. We want to display our list of pages so 
      we can see our list of pages
      and we can navigate to an edit page for each page

      how do we get that data?
      
      Right now our pages data is provided as a global property available to the components
      using the Options API

      but inside of our Pages List component, we are using the Composition API which does not have
      access to this or at last this.$pages does not refer to this component

      We can get to our global properties by using functions but using global props is not the best way
      to provide information for components deeper in our application.

      go to main.js
-->

<template>
  <!-- Let's have a subtitle to distinct this -->
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary btn-sm"
      >New Page</router-link
    >
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in $pages.getAllPages()" v-bind:key="index">
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'yes' : 'no' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
/* 6. Now we want to be able to get the $pages data in this component, first we import the inject function and pass in the key 
we want to access*/
import { ref, reactive, inject } from 'vue';

const data = reactive({ counter: 0 });
//
const $pages = inject('$pages');

function click() {
  data.counter++;
}
</script>

<!-- In the next lesson we will navigate to the Vue that will let us edit to one of these pages but to
prepare for that let's add a create button and remove the create page link so we can just see the Pages Link in
Navbar -->
