<!-- 1.  We need to revisit this component because we are going to transition this
from the Options API to the Composition API 

to learn how to define computed values and watchers. Also discuss what is and isn't going to transfer over

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
        <!-- 5. Although. . .  we can get rid of our Link URL because we don't need that anymore
        
          <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        -->
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

<!-- 
  <script>
export default {
  
    /* 2. The pageCreated event is not going to transfer over.
    
    Remember the createPage view was a direct child of the App component, and we used the pageCreated event to tell the 
    App component that this page is created and you can add it to the pages array.

    But now the createPage view is rendered thanks to the router. So we will need to use the global event bus to tell the rest
    of the application the page was created so we don't need the emits option anymore.

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

  We will still need our event bus, but everything else should transfer over


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
    */
   

};
</script>
 -->

<!-- 3. Composition API and transfer the above computed and watcher values over -->
<script setup>
/* 4. Let's start with our data.

  data() {
  return {
    pageTitle: '',
    content: '',
    linkText: '',
    linkUrl: '',
    published: true,
  };

We can do it two ways:
  Create individual variables and use the ref function to make them reactive.
  OR
  Use the reactive function and make this entire object reactive


  let's do the ref approach to work with simple variables
*/

import { useRouter } from 'vue-router';
/* 8. We also need our event bus so we need to import the inject function

12. Now for our computed and watcher values, all we need to do is import the computed and watch function
*/
import { inject, ref, computed, watch } from 'vue';
/* 9. Go ahead and get our pages as well with our bus event*/
const bus = inject('$bus');
const pages = inject('$pages');

/* 6. Next thing is adding our functions from the methods option.

We need to make some changes of course:
Get rid of linkURL
The this.variable name since it's now just simple variable name
Get rid of the lines that reset the form so we follow the same behaivor to the edit form, so whenever we create the page
it takes us to the pagesList

so import the useRouter and navigate to the pagesList
 */
const router = useRouter();

/* 4. Because of this approach we don't need to make any modification to our template because
the v-models for all of these fields are simple value.*/
let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let published = ref(true);

function submitForm() {
  if (!pageTitle || !content || !linkText) {
    alert('Please fill the form.');
    return;
  }
  //18. because above are refs, we need to add the .value property
  let newPage = {
    pageTitle: pageTitle.value,
    content: content.value,
    link: {
      text: linkText.value,
    },
    published: published.value,
  };

  /*11. Before we emit this, we need to add this page to our data store and pass in the object*/
  pages.addPage(newPage);

  /*10. When it comes to emitting this pageCreated event, we will use our bus here and let's change the name from paegCreated to with a hyphen */
  bus.$emit('page-created', newPage);

  /* 11. After that use the router to navigate to the pages page */
  router.push({ path: '/pages' });
}

/* 13.
  computed: {
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },

  For the computed values, it is almost the exact with the Options API.
  We want to create a varaible with the same name with the prop that we use.
  Then call the computed function that takes in a callback function that is going to do whatever it is
  to compute aka check the values of our form

  computed([callback function])
*/
const isFormInvalid = computed(() => {
  !pageTitle || !content || !linkText;
});

/*14.

watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.linkText == oldTitle) {
        this.linkText = newTitle;
      }
    },

  Setting up a watcher is also very simple. We call the watch function
  watch([pass in value we want to watch], [callback function that will execute when value changes])

  now there is some rules about setting up a watch. Whatever it is we are watching
  HAS TO BE REACTIVE so the value being passed in must be created by ref or reactive

*/
watch(pageTitle, (newTitle, oldTitle) => {
  // don't forget we need to use the value property to check the input value
  if (linkText.value == oldTitle) {
    linkText.value = newTitle;
  }
});
</script>

<!-- 
  15. Go to our data.js file
  
  
  Self note summary:

ref:
  Purpose: To create reactive references to primitive values or objects.
  Use Case: When you need to declare a piece of reactive state in a Vue component. Changes to this state will automatically cause the DOM to update.
  Example: You use ref when you want a value that the component can update directly and watch for changes.
  
computed:
  Purpose: To define reactive computed properties that derive their values from other reactive properties.
  Use Case: When you need to define a value that is computed from other reactive properties and should update automatically when its dependencies change. It's useful for complex calculations or when you need to transform data for display.
  Example: You use computed when you need to calculate a value based on other reactive state and want it to automatically recompute when dependencies change.

watch:
  Purpose: To perform side effects in response to changes in reactive properties or computed properties.
  Use Case: When you need to run a function in response to a change in a reactive property, such as fetching data from an API, logging, or performing some other side effect.
  Example: You use watch when you need to execute code in reaction to a change in reactive data, but not necessarily change the DOM directly.
-->
