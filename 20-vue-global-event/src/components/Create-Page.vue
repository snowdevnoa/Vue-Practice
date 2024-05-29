<!-- 1. Custom events are great but there are limitations which is:

Component emitted events DO NOT bubble.

meaning for example, in normal HTML and JS let's say we click on a button. That will generate a click event
and the target of that event will be that bubble element.
But the event does not stop there. It will bubble up to it's parent which is the form element, which will then bubble to it's parent aka the div element, 
and keep bubbling up until it reaches the top of it's hierarchy.

button -> form -> div -> etc.

The fact that events bubble gives us the ability to trigger an event on an element and then we can listen to that
event higher up in the hierarchy.

it may sound that it is not useful BUT IT IS, trust.


2. In a Vue component, whenever you emit an event from inside a component that event can only be listen for
inside the direct parent and does nto bubble up in the component hiearchy

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
  emits: {
    pageCreated({ pageTitle, content, link }) {

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

      /* 3. For example , we had set up a custom event inside the createPage component where we emitted the pageCreated event. 
      We LISTENED for that event inside of our App component.
  
      
  
      
      */
      this.$emit('pageCreated', {
        pageTitle: this.pageTitle,
        conent: this.content,
        link: { text: this.linkText, url: this.linkUrl },
        published: this.published,
      });

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
