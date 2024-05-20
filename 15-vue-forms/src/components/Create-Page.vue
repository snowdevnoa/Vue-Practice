<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label"> Page Title </label>
        <!-- 6. with traditional js we would  apply an id to the input and text area element
        
        With Vue, we can't necessarily technically do that because we are inside a component which means if we wanted we could
        use multiple create-page components within the same parent component (then we would have multiple text area and multiple same ids) which is not gonna help.

        Instead we use tools we already know about.
        The vue-bind directive to the value of the input

        v-bind:value="pageTitle"

        which means we create the data option and bind to the value of the input element
        -->

        <!-- 
          8. console shows this and never changes even if we put a value in the input of the html form
          {pageTitle: ''}

          Why? Whenever you bind data using v-bind, yes you are binding data but we are essentially saying that
          the value of the input element is whatever pageTitle CURRENTLY IS  
        -->

        <!-- 10. We can achieve that with the input event
        v-on:input="(event-object)=>{event-object.target.value}"
        -->
        <input
          type="text"
          class="form-control"
          v-bind:value="pageTitle"
          v-on:input="
            (e) => {
              pageTitle = e.target.value;
            }
          "
        />
        <!-- 11. Now we have a two way binding. Even though we have a one way binding with the value and the page title, now we are
        updating the pageTitle whenever the value in the browser changes.
      --></div>
      <div class="mb-3">
        <label for="" class="form-label">Content</label>
        <!-- 12. Now there is an even EASIER way to two way binding without the whole v-bind:value and v-on:input called
        v-model="[variable we want to change]" -->
        <textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="content"
        ></textarea>
      </div>
      <div class="mb-3">
        <!-- 5. We know we are passing an object, we just don't know what that value is going to be yet -->
        <button
          class="btn btn-primary"
          v-on:click.prevent="pageCreated({ pageTitle, content })"
        >
          <!-- 7. -->
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  /*4. remember the create page function is passed to this component as a prop
    
    and remember it will execute once the button is clicked so lets set up the click event above */
  props: ['pageCreated'],
  data() {
    return {
      pageTitle:
        '' /* 9.If we provide any text as the intial value, when we go back to the browser and refresh, we're going to see that value display for the page title.
      It's a ONE-WAY binding.

      INSTEAD what we have to do is update pageTitle in the data option, whenever the value of the input element changes.

      Go to step 10 */,
      content: '',
    };
  },
};
</script>

<!-- SUMMARY:

  So in order to work with simple form elements, all we need to do is use this v-model="" to bind a data property to that form control

-->
