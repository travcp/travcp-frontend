<template>
	
		<div class="wrapper">
			<div class="image-holder">
				<!-- <img src="../assets/shibuya.png" alt="Sign up image"> -->
				<div class="image-holder-inner-text">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="display: block">
					    <ol class="carousel-indicators">
					      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					    </ol>
					    <div class="carousel-inner" role="listbox">
					      <!-- Slide One - Set the background image for this slide in the line below -->
					      <div class="carousel-item active">
					      	<h2>Find a Unique Spot</h2> <br>
					      	<p>With TravvApp, you get to book unique <br> spots, Experineces and also order <br> Souvernirs straight from your home.</p>
					        <div class="carousel-caption d-none d-md-block">
					          <!-- <h2 class="display-4">First Slide</h2> -->
					        </div>
					      </div>
					      <!-- Slide Two - Set the background image for this slide in the line below -->
					      <div class="carousel-item">
					      	<h2>Find a Unique Spot</h2> <br>
					      	<p>With TravvApp, you get to book unique <br> spots, Experineces and also order <br> Souvernirs straight from your home.</p>
					        <div class="carousel-caption d-none d-md-block">
					          <!-- <h2 class="display-4">Second Slide</h2> -->
					        </div>
					      </div>
					      <!-- Slide Three - Set the background image for this slide in the line below -->
					      <div class="carousel-item">
					      	<h2>Find a Unique Spot</h2> <br>
					      	<p>With TravvApp, you get to book unique <br> spots, Experineces and also order <br> Souvernirs straight from your home.</p>
					        <div class="carousel-caption d-none d-md-block">
					          <!-- <h2 class="display-4">Third Slide</h2> -->
					        </div>
					      </div>
					    </div>
					    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					          <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
								<button class="btn btn-primary" style="background-color: grey;border-color: grey;border-radius: 100px;">
									-->
								</button>
					          <span class="sr-only">
					          </span>
					        </a>
					</div>	
				</div>
			</div>
			<div class="form-inner">
					<div class="col-md-12 signin-form">
						<div class="row">
							<div class="col-md-12" style="text-align: right;">
								<div class="btn-group toggle-user btn-group-toggle" data-toggle="buttons">
								  <label class="btn br-update" style="background: grey;color: #FFF;">
								    <input type="radio" name="options" id="option1" autocomplete="off" checked> Merchant
								  </label>
								  <label class="btn active br-update" style="background: #F81894;color: #FFF;">
								    <input type="radio" name="options" id="option2" autocomplete="off"> User
								  </label>
								</div>
							</div>
										<br>
							<div class="col-md-12">
								<form  @submit.prevent="formSubmit">
									<div class="form-header">
										<h3>Sign in</h3>
										<p style="color: red" v-if="loginerrors">{{ loginerrors }}</p>
									</div>
									
									<div class="row">
										<div class="col-md-2"></div>
										<div class="form-group col-md-8" style="text-align: center;">
											<input type="email" v-validate="'required|email'" v-model="email" class="form-control signin-input" name="email" placeholder="Email">
										</div>
										<div class="col-md-2"></div>
									</div>
									
									<div class="row">
										<div class="col-md-2"></div>
										<div class="form-group col-md-8">
											<input type="password" class="form-control signin-input" placeholder="Password" v-model="password" name="password">
										</div>
										<div class="col-md-2"></div>
									</div>
									<br> <br>
									<div class="row">
										<div class="col-md-3"></div>
										<div class="col-md-6" style="text-align: center;">
											<button type="submit" class="btn btn-lg login-btn">Sign in</button>
										</div>
									</div>
								</form>
								<div class="row">
									<div class="col-md-12">
										<p class="not-a-mem">
											Not a Member yet? <router-link to="/signup">Sign up</router-link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
			
		</div>

</template>

<script>
    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';

    export default {
        name: 'Signin',
        beforeRouteEnter(to, from, next){
            if(localStorage.getItem('auth')) {
                return next({ path: '/' })
            }
            next();
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
                        this.$noty.success("Login sucessfull")
                    } else {
                    	this.$noty.error("Oops, something went wrong!")
                    }
                    // if (this.login_errors != null) {
                    // 	this.$noty.error("Oops, something went wrong!")
                    // 	this.$noty.success("Login sucessfull")
                    // } else {
                    // 	this.$noty.success("Login sucessfull")
                    // }
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
	.login-form-inner {
		background: #C0C2C4;
	}
	.signin-form {
		background: #FFF;
		border-radius: 15px;
		height: 100%;
		width: 750px;
		padding: 40px 10px 10px 10px;
	}
	.login-btn{
	    background: #F81894;
	    border: none;
	    /* padding: 44px 29px 39px 25px; */
	    font-family: MuseoSans700;
	    font-size: 16px;
	    width: 120px;
	    height: 50px;
	    border-radius: 8px;
	    background-color: #f81894;
	    color: #FFF;
	    margin-top: -10px;
	}
	.login-form-control{
		/*width: 200px;*/
		background: #D8D8D8;
		color: #000;
		border-bottom: none;
		border-radius: 20px;
	}
	.not-a-mem {
		text-align: right;
		color: #231f1f;
		font-weight: bold;
	}
	.btn-group.toggle-user.btn-group-toggle {
	    position: relative;
	    /* top: -80px; */
	    margin-bottom: 100px;
	}
</style>