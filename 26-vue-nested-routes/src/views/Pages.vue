<!-- 4. This is gonna serve as a container for all of the NESTED routes-->
<template>
    <div class="container">
        <!-- 5. So that all of the child routes we will visit will have the h2 element in them so it
        indiciates it is part of the Page management -->
        <h2>Page Management</h2>
        <!-- 6. Add router-view -->
        <router-view></router-view>
    </div>
</template>

<!-- 7. So this Pages component we just wrote will be loaded into our App.vue but it has it's own router-view


Go to routes.js-->