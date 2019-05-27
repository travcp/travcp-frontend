<template>
  <div>
    <vue-headful
            title="Signup | TravvApp"
            description="Description from travvApp"
        />
    <Navbar />
    <div class="wrapper">
      <div class="image-holder signup-image-holder">
        <!-- <img src="../assets/shibuya.png" alt="Sign up image"> -->
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
        <div class="container">
        <div class="row">
          <div class="col-md-12" style="text-align: right;">
            <!-- <div class="btn-group toggle-user btn-group-toggle" data-toggle="buttons">
              <label class="btn br-update" style="background: grey;color: #FFF;">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> Merchant
              </label>
              <label class="btn active br-update" style="background: #F81894;color: #FFF;">
                <input type="radio" name="options" id="option2" autocomplete="off"> User
              </label>
            </div> -->
          </div>
          <div class="col-md-12" style="padding-top: 40px;">
            <form @submit.prevent="formSubmit">
              <div class="form-header">
                <h3>Sign up</h3>


                <div class="alert alert-danger" role="alert" v-if="user_errors">
                  {{ user_errors.errors.email[0] }}
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="">First Name</label>

                  <input  v-validate="'required'" v-model="first_name" type="text" name="first_name" class="form-control signin-input" placeholder="Micheal">
                </div>
                <div class="form-group col-md-12">
                  <label for="">Last Name</label>

                  <input v-model="surname" type="text" class="form-control signin-input" placeholder="Jackson">
                </div>
              </div>

              <!-- <div class="row">
                <div class="form-group col-md-12">
                  <label for="">Choose your Username</label>
                  <input type="text" class="form-control signin-input" placeholder="JohnXYZ.">
                </div>
              </div> -->
              
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="">Email</label>
                  <input v-validate="'required|email'" v-model="email" type="email" name="email" class="form-control signin-input" placeholder="Enter a valid email address">
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-12">
                  <label for="">Password</label>
                  <p>
                    <input v-validate="'required|min:6'" :type="passwordFieldType" v-model="password" name="password"  class="form-control signin-input" placeholder="********">
                    <a  @click="switchVisibility" v-if="eyeVisibility" role="button" class="VuePassword__Toggle"><svg viewBox="0 0 32 32" class="VuePassword__Toggle__Icon"><path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path></svg> <!----></a>
                    <a  @click="switchVisibility" v-else role="button" class="VuePassword__Toggle"><!----> <svg viewBox="0 0 32 32" class="VuePassword__Toggle__Icon"><path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path> <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path> <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path></svg></a>                  </p>
                  <!--<vue-password v-validate="'required|email'" v-model="password"-->
                                <!--classes="form-control signin-input"-->
                  <!--&gt;-->
                  <!--</vue-password>-->
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
                    <button type="submit" class="btn btn-lg signup-btn" :disabled="loading.userRegistration">
                      <span v-if="loading.userRegistration">
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
          </div>
        </div>
          
        </div>
      </div>
      
    </div>
    <!-- <Footer /> -->
  </div>

</template>

<script>
  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
  import Footer from '@/components/Footer.vue';

  import Navbar from '@/components/Navbar.vue';
  import VuePassword from 'vue-password'

	export default {
		name: 'Signup',
        beforeRouteEnter(to, from, next){
            if(localStorage.getItem('auth')) {
                return next({ path: '/' })
            }
            next();
        },
        data() {return{
            first_name: null,
            surname: null,
            email: null,
            password: null,
            eyeVisibility: false,
            passwordFieldType: 'password'
        }},
        methods: {
            ...mapActions(['userRegistration']),
            switchVisibility() {
              this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
              this.eyeVisibility = !this.eyeVisibility
            },
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
            ...mapState(['loading']),
            user_errors() {
                return this.user_registration_errors;
            }
        },
        components: {
          Navbar, Footer, VuePassword
        }
	}
</script>

<style scoped>
  /*button.navbar-toggler {
      width: 50px;
  }*/
  nav.container.navbar.navbar-expand-lg.navbar-light.travvappNavbar {
      position: absolute;
      top: 5px;
  }
  /*div#navbarSupportedContent {
      background: #FFF;
      padding-bottom: 20px !important;
  }*/
  @media (max-width: 1199px) {
    .wrapper {
        flex-direction: row;
    }
    .form-inner {
        padding-left: 5vw;
        padding-right: 5vw;
    }
    .signin-form {
        padding-top: 30vh;
    }
  }
  /*@media (max-width: 991px){
      .wrapper .image-holder {
           height: 100vh; 
      }
  }*/
  @media (max-width: 767px) {

    .wrapper .image-holder {
      display: none;
    }
    .wrapper {
        flex-direction: column;
    }
  }
  @media (max-width: 1199px)  {
    .wrapper .image-holder {
        width: 100%;
        height: 100vh; 
    }
    .signin-form {
        background: transparent;
        padding-top: 20vh;
    }
    a.carousel-control-next {
      display: none;
    }
  }
  @media (max-width: 1199px) {
    .form-inner {
        padding-left: 5vw;
        padding-right: 5vw;
    }
  }
  @media (max-width: 551px) {
    .wrapper .image-holder {
      display: inline-block;
    }
    .signin-form {
      background: #FFF;
      padding-top: 0;
    }
    .wrapper .image-holder {
        width: 100%;
        height: 40vh;
    }
    .image-holder-inner-text {
        display: none;
    }
  }
  nav.container.navbar.navbar-expand-lg.navbar-light.travvappNavbar {
      z-index: 2;
  }
</style>
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
  @media (max-width: 767px) {
    .wrapper .image-holder {
      width: 100%;
      height: 100vh;
    }
    .wrapper .form-inner {
        width: 100%;
    }
  }
  .signup-image-holder {
      background: url(../assets/signin_hero_image.jpg) no-repeat;
      background-size: cover;
  }
  .form-header {
    margin-bottom: 19px;
    margin-top: 39px;
  }
  .wrapper {
    /*margin-top: -70px;*/
  }
a.VuePassword__Toggle {
  position: relative;
  float: right;
  top: -35px;
}
</style>