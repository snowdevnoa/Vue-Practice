<!-- 1. Implementing the Edit view. -->

<template>
  <h4>Edit page {{ page.pageTitle }}</h4>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label"> Page Title </label>
          <!-- 4. we can get set up the v-model so that it is bound to a property on the page object.
                Do it for the rest of the input
          -->
          <input type="text" class="form-control" v-model="page.pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Content </label>
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="page.content"
          ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="page.link.text" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="page.published"
            />
            <label class="form-check-label" for="gridCheck1"> Published </label>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <!-- 5. Listen for the click event to edit and create a function called submit -->
      <button class="btn btn-primary me-2" @click.prevent="submit">Edit</button>
      <button class="btn btn-secondary" @click.prevent="goToPagesList">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
/*2. We need the inject method from vue because we need to pull in our pages data structure */
import { inject } from 'vue';
const pages = inject('$pages');
/* 12. inject the bus into the component to use and then we need to listen to this event in the Navbar component*/
const bus = inject('$bus');

const router = useRouter();
const { index } = defineProps(['index']); //destructure to get index directly instead of props.index

/* 3. Get page object which allows us to tie into the individual fields within our forms. */
let page = pages.getSinglePage(index);

/* 6. Create an editPage method that passes the index of the page we want to edit and the page object*/
function submit() {
  pages.editPage(index, page); //7. Go to data.js to create the method because it belongs to the pages object

  /*10. Create a bus event so that whenever we submit the form, we will use the emit method 
to where we would say page updated and supply some information of the page that is updated. Not everything needs the information,
for example the navbar doesn't care about what page is updated but when it is updated so it can reload the pages. But just in case any other components 
that may need it, we can supply it

go to main.js
*/
  bus.$emit('page-updated', {
    index,
    page,
  });

  /* 20. we will call it here as well and above in the cancel button */
  goToPagesList();
}
/* 19. Now we need to navigate back to the pages list whenever we submit the edit page or cancel 
  we will use our router and push in the path to the pages view
  */
function goToPagesList() {
  router.push({ path: '/pages' });
}
</script>

<!-- 21. There is a slight bug that if you change the field of the  Page Title or Content and edit, it won't directly
reflect in the Navbar unless you click on the link because we are relying on indexes and not ids-->