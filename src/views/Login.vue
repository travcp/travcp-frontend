<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <div class="form_section">
            <form @submit.prevent="formSubmit">
                <h1>Login</h1>
                <p>{{ loginerrors }}</p>
                <input type="email" v-validate="'required|email'" placeholder="Email *" v-model="email" name="email"
                    class="form-control form-control-lg"> <br>
                <span>{{ errors.first('email') }}</span> <br>


                <input type="password" placeholder="Password *" v-model="password" name="password"
                    class="form-control form-control-lg"> <br>
                <span>{{ errors.first('password') }}</span> <br>


                <button type="submit">Submit</button> <br>
            </form>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';

    export default {
        name: 'Login',
        beforeRouteEnter(to, from, next){
            if(localStorage.getItem('auth')) {
                return next({ path: '/' })
            }
            next();
        },
        components: {
            Navbar
        },
        data: function () {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            ...mapActions(['userLogin']),
            formSubmit: function () {
                let data = {
                    email: this.email,
                    password: this.password
                }
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.userLogin({
                            email: this.email,
                            password: this.password
                        });
                        // this.$noty.success("Login sucessfull")
                    } else {
                        this.$noty.error("Oops, something went wrong!")
                    }
                });
            }
        },
        computed: {
            ...mapState(['login_errors']),
            loginerrors(){
                // return Object.keys(this.login_errors).length >= 2;
                return this.login_errors;
            },
            errormessage(){
                if(this.loginerrors) {
                    return this.loginerrors.error.message
                }
            }
        }
    }
</script>

<style>
    .form_section {
        margin-top: 87px;
        width: 400px;
        text-align: center;
    }
</style>