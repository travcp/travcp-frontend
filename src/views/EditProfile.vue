<template>
	<div class="edit_profile">
		<Navbar />
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="card shadow p-3 mb-5 bg-white rounded edit_profile_content">
						<h2>Edit Profile</h2>
						<br><br>
						<form @submit.prevent="formSubmit">
							<div class="row">
								<div class="form-group col-4">
									<label for="">Company (disabled)</label>
									<input type="text" class="form-control edit-prof-input" placeholder="TravvApp Inc.">
								</div>
								<div class="form-group col-4">
									<label for="">Username</label>
									<input type="text" class="form-control edit-prof-input" placeholder="michealjackson23">
								</div>
								<!-- first_name
								surname
								email -->
								<!-- authFirstName
								authSurnName
								authEmail -->
								<div class="form-group col-4">
									<label for="">Email address</label>
									<input v-validate="'required|email'" v-model="authEmail" type="text" class="form-control edit-prof-input" placeholder="Email">
								</div>
								<div class="form-group col-6">
									<label for="">First Name</label>
									<input v-validate="'required'" v-model="authFirstName" type="text" class="form-control edit-prof-input" placeholder="Micheal">
								</div>
								<div class="form-group col-6">
									<label for="">Last Name</label>
									<input v-validate="'required'" v-model="authSurnName" type="text" class="form-control edit-prof-input" placeholder="Jackson">
								</div>
								<div class="form-group col-12">
									<label for="">Address</label>
									<input type="text" class="form-control edit-prof-input" placeholder="15, Osborne Foreshore Road, Ikoyi, Lagos">
								</div>
								<div class="form-group col-4">
									<label for="">City</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Lagos">
								</div>
								<div class="form-group col-4">
									<label for="">Country</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Nigeria">
								</div>
								<div class="form-group col-4">
									<label for="">Postal Code</label>
									<input type="text" class="form-control edit-prof-input" placeholder="Zip Code">
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
        // },
		data() {
			return {
				first_name: this.auth.user.firstname,
				surname: null,
				email: null,
				subscribed_to_newsletter: null,
				role: 'user'
			}
		},
		components: {
			Navbar
		},
		computed: {
			...mapState(['auth']),
			authFirstName(){
				return this.first_name = this.auth.user.first_name
			},
			authSurnName(){
				return this.surname = this.auth.user.surname
			},
			authEmail(){
				return this.email = this.auth.user.email
			}
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
							role: this.role,
							user_id: this.auth.user.id
						});
                    } else {
                        this.$noty.error("Oops, something went wrong!")
                    }
                });
			}
		}
	}
</script>
<style>
	.edit_profile {
		margin-top: 95px;
	}
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