<!--11. <template>Edit page {{ props.index }}</template> -->
<template>
  <div>Edit page {{ route.params.index }}</div>
</template>

<!-- 10. Now we need to be able to get the param information from inside of our page edit, 
    use the setup attribute (to use Composition API). We can get data from one or 2 ways:

    -we can get our data from the params from the route
    -define the params as props (let's do this one first so go to routes.js)
-->
<script setup>
/* 12. Let's look at the first way if we don't want to use the params as props. First import
the useRoute function. Then we would get the route. so then from there we can use the route to get to the params,
to get the index */

import { useRoute } from 'vue-router';
const route = useRoute();

/* 11. Get our props from the route. There is a built in function we can use wihtout having to
import anything:

defineProps([an array that contains the strings of props that we need])

Works alot like the props option in the Option API*/

const props = defineProps(['index']); //remember this is an object with the values being the props so props.index
</script>

<!-- Summary: The Composition API doesn't hinder us in anyway. We might have to write a couple of lines of extra code, but that is arguably neglible -->
