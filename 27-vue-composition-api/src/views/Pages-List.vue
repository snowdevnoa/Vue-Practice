<!-- 1. We have the Composition API because of React

a little background of React components: 
In React you can create a component in two ways: either
-a class
-a function

originally it was a class and it would have all the functionality you would need in a component: state, method, etc.

but then they created function components. Originally function components were simple.
You would feed the function component data and then they would output that data. There may be some manpulaiton
but it was only for the output data. There was no state, very simple.

Well people like using the function component so they wanted to the same thing a class
could do. In order to facilitate that functionaility they created 

HOOKS: Functions that you would import and use the hook that was needed within that component

for example if you needed state, you would import a function to use that state.

The Composition API was based off this idea but BETTER.

-->

<template>
  <p>{{ data.counter }}</p>
  <button v-on:click.prevent="click">click</button>
</template>
<!-- 
    <script>
/* 2. Lets look at difference between Options API vs  Composition API */
export default {
  data() {
    return {
      counter: 0, // we could simplify by incrementing click in the template but nah lets do the methods option
    };
  },
  methods: {
    click() {
      this.counter++;
    },
  },
};
</script>
    
    
    3. In a very large component you have to jump around which can cause feel disjointed
    The composition api is to help organize our code

    we must add the setup attribute to the script element because in the Vue version 2 we would have to
    define a function called setup which was used for setting up the code for our component

    function setup(){
        return{
            counter,
            click
        }
    }

    we would have to return the things we would have to use but now in Vue 3 we just need to use the setup
-->

<script setup>
/* 5.  There are two hooks we can use, ref or reactive. You can use one or the either

ref- allows us to create a reactive value that is a primitive value. Number, string boolean. Or it can be object, array
*/
import { ref, reactive } from 'vue';

/*  
 let counter = ref(0); 
 6. BTS ref(0) = {value: 0} so we need to match this inside of our script
 */

/* 8. The other way is to use the reactive hook

The reason why we define this as data is because you CANNOT USE primitive data. It is based off anything
that is an object so an array. So it is very similar to the concept of data
*/
const data = reactive({ counter: 0 });

function click() {
  // counter.value++ 7. So we need to update the value property BUT in the template we don't need to, it is automatically implied

  data.counter++; // 9. For reactive, you just use the value that corresponds to the object AND in the template too

  /* 4. 

    console.log(counter.value);
  
  Now if you look on the browser, it seems it may work but if you hit click, nothing happens. Except
behind the scene the value of counter IS changing. But it wil not update because we are using a
simple variable, meaning it is not REACTIVE

so BTS view doesn't know this value is changing, it's not going to update the component in the problem.

So we need to tell Vue that the value is reactive.

2 Solutions:
Use a hook
*/
}
</script>
