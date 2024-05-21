<!-- 

1. Form validation and visual cues (if the form is not valid, the submit button is disabled)

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
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label" for="gridCheck1"> Published </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 8. We are going to be binding this to the disabled attribute of the button
    
        v-bind:disabled
    
    so if disable is true, the button is disabled.
    -->
    <div class="mb-3">
      <button
        class="btn btn-primary"
        :disabled="isFormInvalid"
        @click.prevent="submitForm"
      >
        <!-- 3. 
        instead of pageCreated({pageTitle,content})
        
        Because we added the extra data, we need to build a more complex object so let's define a method called submitForm-->
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['pageCreated'],
  /* 7. Set up the visual cue of the button by using a computed value */
  computed: {
    isFormInvalid() {
      /* 9. Check if any of the form input is empty  */
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: '',
      content: '',
      /* 2. Set up the 2 way binding between the form control and data property for the linkText and linkUrl*/
      linkText: '',
      linkUrl: '',
    };
  },
  //   4. Define a methods option and add the submitForm method
  methods: {
    submitForm() {
      /* 5. Check that all the values exist */
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert('Please fill the form.');
        return;
      }

      /* 6. If all of it does exist, then call the pageCreated and pass in an object with all the data */
      this.pageCreated({
        pageTitle: this.pageTitle,
        conent: this.content,
        link: { text: this.linkText, url: this.linkUrl },
      });
    },
  },
};
</script>
