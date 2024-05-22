<!-- 

  1. Add the code to add page object to the pages Array so we will display those in the Navbar, 
  we will also take into account this new published value, so that if a page is marked as publish it will be displayed
  in the navbar else no


 -->


<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label"> Page Title </label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Content </label>
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="content"
          ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <!-- 3. Set up a binding for the new published data property -->
            <input class="form-check-input" type="checkbox" v-model="published"/>
            <label class="form-check-label" for="gridCheck1"> Published </label>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <button
        class="btn btn-primary"
        :disabled="isFormInvalid"
        @click.prevent="submitForm"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['pageCreated'],
  computed: {
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: '',
      content: '',
      linkText: '',
      linkUrl: '',
      published: true //4. Initialize this to true
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert('Please fill the form.');
        return;
      }
      this.pageCreated({
        pageTitle: this.pageTitle,
        conent: this.content,
        link: { text: this.linkText, url: this.linkUrl },
        // 5. Add the published property here as well, go to navbar component for step 6
        published: this.published
      });



      /* 9. Clear the form after we submit */
      this.pageTitle = '',
      this.content = '',
      this.linkText = '',
      this.linkUrl ='',
      this.published = true 
    },
  },
};
</script>
