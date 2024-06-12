<template>
  <div>
    <h4>Edit page {{ page.pageTitle }}</h4>
    <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label"> Page Title </label>
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
              <label class="form-check-label" for="gridCheck1">
                Published
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary me-2" @click.prevent="submit">
          Edit
        </button>
        <button class="btn btn-secondary me-2" @click.prevent="goToPagesList">
          Cancel
        </button>
        <button class="btn btn-danger me-2" @click.prevent="deletePage">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';
const pages = inject('$pages');
const bus = inject('$bus');

const router = useRouter();
const { index } = defineProps(['index']);
let page = pages.getSinglePage(index);

function submit() {
  pages.editPage(index, page);
  bus.$emit('page-updated', {
    index,
    page,
  });

  goToPagesList();
}

function goToPagesList() {
  router.push({ path: '/pages' });
}

/*2. We have all the information we need, we just need to interact with our pages.

And we could say we have a method called removePage that passes in the index.
*/
function deletePage() {
  pages.removePage(index);

  /*3. Of course we need to tell the rest of the application that a page was deleted.
       The only thing we really need to supply is the index. The only thing listening to this its the navbar
  */
  bus.$emit('page-deleted', {
    index,
  });

  goToPagesList();
}
</script>

<!-- 1. Provide users a way to delete pages. One way is to provide a delete button in the edit page
 view

 Another option is to add the button to the pages list. Let's do the first.
-->
