<template>
    <div class="modal" tabindex="-1" role="dialog" id="merchant-signup-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Become a merchant</h5>
                </div>
                <div class="modal-content">
                    <div class="form-inner">
                        <div class="container">
                            <div class="row">
                            
                                <div class="col-md-12">
                                        <form @submit.prevent="formSubmit">
                                        <div class="form-header">
                                            <!-- <h3>Sign up</h3> -->


                                            <div class="alert alert-danger" role="alert" v-if="user_errors">
                                            {{ user_errors.errors.email[0] }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label for="">Business Name</label>
                                                <input  v-validate="'required'" v-model="business_name" type="text" name="business_name" class="form-control signin-input" placeholder="Business name">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="">About Merchant</label>
                                                <textarea name="about_merchant" id="about_merchant" cols="30" rows="10" class="form-control" v-model="about_merchant" placeholder="Merchant's bio"></textarea>
                                                <!-- <input v-model="surname" type="text" class="form-control signin-input" placeholder="Jackson"> -->
                                            </div>
                                        </div>
                                    
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="">Business Email</label>
                                            <input v-validate="'required|email'" v-model="email" type="email" name="email" class="form-control signin-input" placeholder="Enter a valid email address">
                                        </div>
                                    </div>
                                    
                                    <div class="container">
                                        <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                                <label class="form-check-label" for="inlineCheckbox1">I agree to the following <a href="#">Terms and Conditions</a> </label>
                                            </div>
                                        </div>
                                        <div class="col-md-12" style="text-align: center">
                                            <button type="submit" class="btn btn-lg signup-btn">
                                            <span v-if="isLoading">
                                                <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                            </span>
                                            <span v-else>
                                                Sign up
                                            </span>
                                            </button>
                                        </div>
                                        </div>
                                        
                                    </div>

                                    </form>
                                    <br>
                                    <h6 style="text-align: center;">Already a Member ? <router-link to="/signin">Sign in</router-link></h6>
                                    <br>
                                    <br>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: "MerchantSignupModal",
        data(){
            return {
                business_name: "",
                about_merchant: "",
                email: "",
            }
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
                        if (this.user_registration_errors === null) {
                        	this.$noty.success("Registration sucessfull")
                        } else {
                        	this.$noty.error("Oops, something went wrong!")
                        }
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
            ...mapState(['isLoading']),
            user_errors() {
                return this.user_registration_errors;
            }
        }
}
</script>
<style scoped>
.modal{
    border-radius:20px;
}
</style>
