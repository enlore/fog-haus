<template lang="pug">
    #app
        home

</template>

<script>
    import Home from './components/home.vue'

    export default {
        name: 'app',

        components: {
            Home
        }
    }
</script>

<style lang="scss">
    //@import 'normalize.css';
    //@import "../node_modules/susy/sass/susy";
    @import 'style.scss';
</style>
