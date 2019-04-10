<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <div class="form_section">
            <h1>Registration</h1>
            {{ user_errors }}
            <form @submit.prevent="formSubmit">
                <input v-validate="'required'" type="text" placeholder="First Name *" v-model="first_name" name="first_name" class="form-control form-control-lg"> <br>
                <span>{{ errors.first('first_name') }}</span>

                <input type="text" placeholder="Surn Name" v-model="surname" name="surname" class="form-control form-control-lg"> <br>
                
                <input v-validate="'required|email'" type="email" placeholder="Email *" v-model="email" name="email" class="form-control form-control-lg"> <br>
                <span>{{ errors.first('email') }}</span>

                <input v-validate="'required|min:6'"  type="password" placeholder="Password *" v-model="password" name="password" class="form-control form-control-lg"> <br>
                <span>{{ errors.first('password') }}</span>
                <br>
                <button type="submit">Submit</button> <br>
            </form>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'Registration',
        beforeRouteEnter(to, from, next){
            if(localStorage.getItem('auth')) {
                return next({ path: '/' })
            }
            next();
        },
        data (){return{
            first_name: null,
            surname: null,
            email: null,
            password: null
        }},
        components: {
            Navbar
        },
        methods: {
            ...mapActions(['userRegistration']),
            formSubmit: function(){
                let data = {

                };
                this.$validator.validateAll().then(result => {
                    if (result){
                        this.userRegistration({
                            email : this.email,
                            password: this.password,
                            first_name: this.first_name,
                            surname: this.surname
                        });
                        this.$noty.success("Registration sucessfull")
                        // this.$
                    }
                    else{
                        this.$noty.error("Oops, something went wrong!")
                    }
                });
                
            }
        },
        computed: {
            ...mapState(['user_registration_errors']),
            user_errors() {
                return this.user_registration_errors;
            }
        }
    }
</script>

<style scoped>
    .form_section{
        margin-top: 87px;
        width: 400px;
        text-align: center;
    }
</style>
