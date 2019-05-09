<template>
	<div class="edit_profile">
		<Navbar />
		<br><br>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="card shadow p-3 mb-5 bg-white rounded edit_profile_content">
						<h2>Edit Profile</h2>
						<br><br>
						<form @submit.prevent="formSubmit">
							<div class="row">
								<!-- first_name
								surname
								email
								company
								address
								city
								country
								postal_code -->
								<div class="form-group col-4" v-if="!checkUserType">
									<label for="">Company (disabled)</label>
									<input type="text" v-model="company" class="form-control edit-prof-input" placeholder="TravvApp Inc.">
								</div>
								<div class="form-group col-4">
									<label for="">Username</label>
									<input type="text" class="form-control edit-prof-input" placeholder="michealjackson23">
								</div>
								<div class="form-group col-4">
									<label for="">Email address</label>
									<input v-validate="'required|email'" type="text" class="form-control edit-prof-input" placeholder="Email" v-model="email">
								</div>
								<div class="form-group col-6">
									<label for="">First Name</label>
									<input v-validate="'required'" type="text" class="form-control edit-prof-input" placeholder="Micheal" v-model="first_name">
								</div>
								<div class="form-group col-6">
									<label for="">Last Name</label>
									<input v-validate="'required'" v-model="surname" type="text" class="form-control edit-prof-input" placeholder="Jackson">
								</div>
								<div class="form-group col-12">
									<label for="">Address</label>
									<input type="text" class="form-control edit-prof-input" placeholder="15, Osborne Foreshore Road, Ikoyi, Lagos" v-model="address">
								</div>
								<div class="form-group col-4">
									<label for="">City</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Lagos" v-model="city">
								</div>
								<div class="form-group col-4">
									<label for="">Country</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Nigeria" v-model="country">
								</div>
								<div class="form-group col-4">
									<label for="">Postal Code</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Zip Code" v-model="postal_code">
								</div>
								<div class="col-8">
									<h5>About Me</h5>
									<p>
										Tour with me, Discover Places and experience the culture, its best when you tour with me.
									</p>
								</div>
								<div class="col-4" style="padding-top: 22px;text-align: center;">
									<button type="submit" class="btn btn-lg submit_btn">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-md-4 edit_profile_user_sec">
					<div class="card" style="width: 100%;">
					  <div class="card-body">
					  	<div class="user_pic"></div>
					    <h5 class="card-title">Micheal Jackson</h5>
					    <h6 class="card-subtitle mb-2 text-muted">michealjackson23</h6>
					    <p class="card-text">Tour with me, Discover Places and experience the culture with me</p>
					    <hr>

					  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import { mapState, mapActions } from 'vuex';

	export default {
		name: 'EditProfile',
        // beforeRouteEnter(to, from, next){
        //     if(localStorage.getItem('auth')) {
        //         return next({ path: '/' })
        //     }
        //     next();
        // },"company": null,
        // "address": null,
        // "city": null,
        // "country": null,
        // "postal_code": null
		data() {
			return {
				first_name: null,
				surname: null,
				email: null,
				subscribed_to_newsletter: null,
				company: null,
				address: null,
				city: null,
				country: null,
				postal_code: null
			}
		},
		components: {
			Navbar
		},
		computed: {
			...mapState(['auth'])
		},
		methods: {
			...mapActions(['updateProfile']),
			formSubmit: function(event) {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.updateProfile({
							first_name: this.first_name,
							surname: this.surname,
							email: this.email,
							subscribed_to_newsletter: this.subscribed_to_newsletter,
							user_id: this.auth.user.id,
							company: this.company,
					        address: this.address,
					        city: this.city,
					        country: this.country,
					        postal_code: this.postal_code
						});
                    } else {
                        this.$noty.error("Oops, something went wrong!")
                    }
                });
			},
			checkUserType(){
				if(this.auth.user.role != "user") {
					return true
				} else {
					return false
				}
			},
			authFirstName(){
				this.first_name = this.auth.user.first_name
				return this.auth.user.first_name
			},
			authSurnName(){
				this.surname = this.auth.user.surname
				return this.auth.user.surname
			},
			authEmail(){
				this.email = this.auth.user.email
				return this.auth.user.email
			},
			authCompany(){
				this.company = this.auth.user.company
				return this.auth.user.company
			},
			authAddress(){
				this.address = this.auth.user.address
				return this.auth.user.address;
			},
			authCity(){
				this.city = this.auth.user.city;
				return this.auth.user.city;
			},
			authCountry(){
				this.country = this.auth.user.country
				return this.auth.user.country;
			},
			authPostalCode(){
				this.postal_code = this.auth.user.postal_code
				return this.auth.user.postal_code
			}
		},
		created() {
			this.authFirstName()
			this.authSurnName()
			this.authEmail()
			this.authCompany()
			this.authAddress()
			this.authCity()
			this.authCountry()
			this.authPostalCode()
		}
	}
</script>
<style>
	.edit-prof-input{
		border-radius: 0;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid #777;
		/*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
	}
	.submit_btn{
		background: #F81894;
	    border: none;
	    font-size: 16px;
	    width: 120px;
	    height: 36px;
	    border-radius: 8px;
	    background-color: #f81894;
	    color: #FFF;
	}
	.edit_profile_content {
		border: none;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
	}
	.edit_profile_content h2 {
		font-weight: bolder;
	}
	.edit_profile_user_sec .card {
		text-align: center;
		border: none;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
	}
	.edit_profile_user_sec .card .card-title {
		color: #F81894;
		font-weight: bolder;
	}

	.edit_profile_user_sec .card .user_pic {
		border: 1px solid #000;
		height: 140px;
		width: 140px;
		margin-left: 90px;
		margin-bottom: 40px;
		border-radius: 100%;
	}
</style>