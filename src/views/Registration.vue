<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <h1>Registration</h1>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Registration',
        components: {
            Navbar
        }
    }
</script>

<style>

</style>