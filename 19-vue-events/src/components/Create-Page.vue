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
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
            />
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
  /* 7. Earlier we said we don't have to declare our events inside our components but we can if we want to
  
  use the emits option which is an array that contains the names of the events that we EMIT from this component 
  emits: ['pageCreated'],

  OR 

  we can set up the emits option as an object to perform validation
  
  */
  emits: {
    pageCreated({ pageTitle, content, link }) {
      /*8.The pageCreated event needs to supply the pageObj object 
    
    
    for example if we check if the pageTitle exist
     
    if(!pageObj.pageTitle){
      return false;
    }
    */
      /* 9.  lets say we just did 
  return false;
  for this event
  
  now this isn't going to prevent our code from working but it does give us the ability to validate those objects that we include with an event */

      if (!pageTitle) {
        return false;
      }
      if (!content) {
        return false;
      }
      if ((!link || !link.text || !link, url)) {
        return false;
      }
    },
  },

  /* 2. We have emulated events as well, pageCreated to where we found a function to that prop so that whenever the pageObject is created we call that function.
  But that is technically not an event
  
  
  However we can create OUR OWN custom event as opposed to emulating the event.

  -For example we can simplify our component so we don't have to declare our events (we can if we want to)
  -Makes our code easier to read
  */
  // props: ['pageCreated'],
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
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert('Please fill the form.');
        return;
      }

      /*6. Now we create the custom event, all we need to do is emit (signal) that event using a 
      $ + "emit" 
      
      the $ indicates that this is a public prop, it is legal and encouraged to use inside our component

      this.$emit([the name of the event we want to emit]) Use CAMAL CASE for the name here, 
      but use a dash for the listener: @page-created for the prop in the App.vue component.


      If all we needed to do was emit the pageCreated event, then we're done but we need to still supply the information for
      that event so we pass in the object
      */

      this.$emit('pageCreated', {
        pageTitle: this.pageTitle,
        conent: this.content,
        link: { text: this.linkText, url: this.linkUrl },
        published: this.published,
      });

      // this.pageCreated({
      //   pageTitle: this.pageTitle,
      //   conent: this.content,
      //   link: { text: this.linkText, url: this.linkUrl },
      //   published: this.published
      // });

      (this.pageTitle = ''),
        (this.content = ''),
        (this.linkText = ''),
        (this.linkUrl = ''),
        (this.published = true);
    },
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.linkText == oldTitle) {
        this.linkText = newTitle;
      }
    },
  },
};
</script>

<!-- Summary:
Passing Data from Child to Parent
In Vue, a child component can use this.$emit to emit a custom event to which the parent component can listen.
 When the event is emitted, the parent can receive data sent along with the event and react accordingly. 
 This provides a straightforward and declarative way to pass data from child to parent. -->
