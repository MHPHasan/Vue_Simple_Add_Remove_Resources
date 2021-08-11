<template>
    <TheHeader title="RememberMe" />
    <StoredResource  :resources="storedResources" />
    <TheResource></TheResource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';

export default {
    components: {
        TheHeader,
        TheResource
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
    }
    body {
        margin: 0;
    }
</style>
