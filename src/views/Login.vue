<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <h1>Login</h1>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Login',
        components: {
            Navbar
        }
    }
</script>

<style>

</style>