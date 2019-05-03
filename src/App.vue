<template>
    <div class="container">
        <h1>Vue routing firebase</h1>
                <router-view name="header-top"/>
                <router-view/>
                <router-view name="header-bottom"/>
    </div>
</template>
<script>
 import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        }
    }
</script>
<style>

</style>


