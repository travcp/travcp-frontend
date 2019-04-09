<template>
    <div class="home">
        <Navbar>
        </Navbar>
        <div class="form_section">
            <h1>Registration</h1>
            <form @submit.prevent="formSubmit">
                <input type="text" :model="first_name" name="first_name" class="form-control form-control-lg"> <br>
                <input type="text" :model="surname" name="surname" class="form-control form-control-lg"> <br>
                <input type="text" :model="email" name="email" class="form-control form-control-lg"> <br>
                <input type="text" :model="password" name="password" class="form-control form-control-lg"> <br>
                <button type="submit">Submit</button> <br>
            </form>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Registration',
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
                this.userRegistration({
                    email : this.email,
                    password: this.password,
                    first_name: this.first_name,
                    surname: this.surname
                })
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
