<template>
	
		<div class="wrapper">
			<div class="image-holder">
				<img src="../assets/shibuya.png" alt="Sign up image">
				<div class="image-holder-inner-text">
					<!-- <h2>Find a Unique Spot</h2> <br>
					<p>With TravvApp, you get to book unique <br> spots, Experineces and also order <br> Souvernirs straight from your home.</p> -->
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
					<div class="col-md-12">
						<form @submit.prevent="formSubmit">
							<div class="form-header">
								<h3>Sign up</h3>


								<div class="alert alert-danger" role="alert" v-if="user_errors">
								  {{ user_errors.errors.email[0] }}
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-5">
									<label for="">First Name</label>
									<input  v-validate="'required'" v-model="first_name" type="text" name="first_name" class="form-control signin-input" placeholder="Micheal">
								</div>
								<div class="form-group col-md-5">
									<label for="">Last Name</label>
									<input v-model="surname" type="text" class="form-control signin-input" placeholder="Jackson">
								</div>
							</div>

							<div class="row">
								<div class="form-group col-md-10">
									<label for="">Choose your Username</label>
									<input type="text" class="form-control signin-input" placeholder="JohnXYZ.">
								</div>
							</div>
							
							<div class="row">
								<div class="form-group col-md-10">
									<label for="">Email</label>
									<input v-validate="'required|email'" v-model="email" type="email" name="email" class="form-control signin-input" placeholder="Enter a valid email address">
								</div>
							</div>

							<div class="row">
								<div class="form-group col-md-10">
									<label for="">Password</label>
									<input v-validate="'required|min:6'" type="password" v-model="password" name="password"  class="form-control signin-input" placeholder="********">
								</div>
							</div>
							
							<div class="container">
								<div class="row">
									<div class="col-md-10" style="text-align: center">
										<div class="form-check form-check-inline">
										  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
										  <label class="form-check-label" for="inlineCheckbox1">I agree to the following <a href="#">Terms and Conditions</a> </label>
										</div>
									</div>
									<div class="col-md-6">
										<button type="submit" class="btn btn-lg signup-btn">Sign up</button>
									</div>
								</div>
								
							</div>

						</form>
					</div>
				</div>
			</div>
			
		</div>

</template>

<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

	export default {
		name: 'Signup',
		
        beforeRouteEnter(to, from, next){
            if(localStorage.getItem('auth')) {
                return next({ path: '/' })
            }
            next();
        },
        data () {return{
            first_name: null,
            surname: null,
            email: null,
            password: null
        }},
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
            user_errors() {
                return this.user_registration_errors;
            }
        }
	}
</script>

<style>
.wrapper .image-holder {
	width: 50%;
}
.wrapper .form-inner {
    width: 50%;
}
.form-inner {
	background: #FFF;
	color: #000 !important;
}
.form-control {
	border-bottom: 1px solid #000;
    border-radius: 0;
    color: #000;
}
.signup-btn {
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
}
.form-header h3 {
	text-transform: capitalize;
  background-size: 1px 1em;
  box-shadow:
    inset 0 -0.175em white,
    inset 0 -0.2em red;
  	display: inline;
  font-weight: bold;
}
.toggle-user{
	height: 35px !important;
}
.image-holder-inner-text{
	padding: 180px 30px 0 80px;
}
.image-holder-inner-text h2{
	color: #FFF;
	font-size: 42px;
	font-weight: bolder;
}
.image-holder-inner-text p{
	font-size: 20px;
	font-weight: bold;
	color: #FFF;
}
label {
	margin-bottom: 0;
}
.signin-input {
	border-top: none;
	border-right: none;
	border-left: none;
}
.carousel-item {
  height: 100%;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.carousel-indicators li {
    position: relative;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 12px;
    height: 12px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    background-color: rgba(255,255,255,.5);
    border-radius: 100px;
}
.carousel-control-next, .carousel-control-prev {
    top: 380px; 
 }
 .carousel-item {
    height: 100%;
    min-height: 450px;
    font-size: 0.8rem;
 }
 label.btn.br-update {
    border-radius: 1.2rem;
  }
</style>