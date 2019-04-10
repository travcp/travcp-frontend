<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <form @submit.prevent="formSubmit">
            <h1>Login</h1>
                <input type="text" placeholder="Email *" :model="email" name="email" class="form-control form-control-lg"> <br>
                <input type="text" placeholder="Password *" :model="password" name="password" class="form-control form-control-lg"> <br>
                <button type="submit">Submit</button> <br>
            </form>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Login',
        components: {
            Navbar
        },
        data: function(){return{
            email: null,
            password: null
        }},
        methods: {
            ...mapActions(['userLogin']),
            formSubmit: function(){
                let data = {
                    email: this.email,
                    password: this.password
                }
                this.userLogin({
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style>
.form_section{
        margin-top: 87px;
        width: 400px;
        text-align: center;
    }
</style>