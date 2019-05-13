<template>
    <div class="modal" tabindex="-1" role="dialog" id="merchant-signup-modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Become a merchant</h5>
                </div>
                <div class="modal-content">
                    <div class="form-inner" style="padding:15px;">
                        <div class="container">
                            <div class="row">
                            
                                <div class="col-md-12">
                                    <form-errors :errors="validationErrors" v-if="validationErrors"></form-errors>
                                    <form @submit.prevent="submitForm">
                                        <div class="form-header">
                                            <!-- <div class="alert alert-danger" role="alert" v-if="user_errors">
                                            {{ user_errors.errors.email[0] }}
                                            </div> -->
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <label for="">Business Name</label>
                                                <input  v-validate="'required'" v-model="business_name" type="text" name="business_name" class="form-control signin-input" placeholder="Business name">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="">About Merchant</label>
                                                <textarea name="about_merchant" id="about_merchant" cols="30" rows="10" class="form-control" v-model="about_merchant" placeholder="Merchant's bio"></textarea>
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
                                                Sign up
                                            <!-- <span v-if="isLoading">
                                                <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                            </span>
                                            <span v-else>
                                                Sign up
                                            </span> -->
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
import FormErrors from '@/components/FormErrors.vue';
import axios from 'axios';
export default {
    name: "MerchantSignupModal",
        data(){
            return {
                business_name: "",
                about_merchant: "",
                email: "",
                validationErrors: ""
            }
        },
        methods: {
            
            submitForm: function(){
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                }
                axios.post(`${this.$store.state.API_BASE}/merchant/extras`, {
                        business_email: this.email,
                        business_name: this.business_name,
                        bio: this.about_merchant,
                        merchant_id: this.$store.state.auth.user.id
                    }, requestHeaders).then(response => {
                        this.$noty.success("Registration sucessfull")
                    }).catch(err => {
                        // this.$noty.error("Oops, something went wrong!")
                        if (err.response.status == 422){
                            this.validationErrors = err.response.data.errors;
                        }
                    })
                // this.$validator.validateAll().then(result => {
                //     console.log("Break it down")
                //     if (result){
                //         console.log("Who that")
                //         axios.post(`${this.$store.state.API_BASE}/merchant/extras`, {
                //             business_email: this.email,
                //             business_name: this.business_name,
                //             bio: this.about_merchant,
                //             merchant_id: this.$store.state.auth.user.id
                //         }).then(response => {
                //             this.$noty.success("Registration sucessfull")
                //         }).catch(err => {
                //             // this.$noty.error("Oops, something went wrong!")
                //             if (err.response.status == 422){
                //                 this.validationErrors = err.response.data.errors;
                //             }
                //         })
                        
                //     }
                //     else{
                //         this.$noty.error("Oops, something went wrong!")
                //     }
                // });
                
            }
        },
        computed: {
            
        },
        components: {
            FormErrors
        }
}
</script>
<style scoped>
.modal{
    border-radius:20px;
}
</style>
