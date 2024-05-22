<!-- 

  1. Enhance the user experience by connecting the page title input and the link text input.
  Create a one to one relationship between those two

 -->


<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <!-- 2. As the user types inside the page title, i want those characters to be automatically replicated
          in the link text field so that the vast majority of pages, the user doesn't have to type that value.
        
          However in the case the link text input is different from the page title, we need to perserve that value. 
          So when the user updates the page title, that isn't reflected in the link text
        -->
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
      published: true 
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
        published: this.published
      });

      this.pageTitle = '',
      this.content = '',
      this.linkText = '',
      this.linkUrl ='',
      this.published = true 
    },
  },
  /* 3. Solution:
      ADD A WATCHER. 
      First add the watch option. 
      Then create a method that has the name of the value we want to watch */
      watch:{ 
        pageTitle(newTitle, oldTitle){  //so when the value of pageTitle changes, this watcher is going to execute and it's going to give access to the newTitle value and the oldTitle value

          /* 4. We need to check what the link text is. We need to see if it is equal to the old title
          because if it is -> then we know the user hasnt changed the link text. 
          
          so in this case we update the link text to the new title
          
          */
          if(this.linkText == oldTitle){
            this.linkText = newTitle
          }
        }
      }
};
</script>

<!-- Summary:

  The difference between a computed property and a watcher:
  
  -Computed proeprties simply return a value. They use the existing data in order to compute(calculate) a value that
  is then use in our template. It DOES NOT make any change to our state. It DOES NOT mutate anything at all. It simply
  computes a value based upon the current data.

  -Watcher on the other hand, watches for a property to change. It gives us the ability to make changes to our state.


  Computed values compute and return a value. Watchers watch for a value to change and allow us to mutate our state.


-->