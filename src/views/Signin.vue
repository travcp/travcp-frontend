<template>
  <div>
    <vue-headful
      title="Signin | TravCP"
      description="Description from TravCP"
    />
    <Navbar />
    <div class="wrapper">
      <div class="image-holder signin-image-holder">
        <!-- <img src="../assets/shibuya.png" alt="Sign up image"> -->
        <div class="image-holder-inner-text">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            style="display: block"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <!-- Slide One - Set the background image for this slide in the line below -->
              <div class="carousel-item active">
                <h2>Find a Unique Spot</h2>
                <br />
                <p>
                  With TravCP, you get to book unique <br />
                  spots, Experineces and also order <br />
                  Souvernirs straight from your home.
                </p>
                <div class="carousel-caption d-none d-md-block">
                  <!-- <h2 class="display-4">First Slide</h2> -->
                </div>
              </div>
              <!-- Slide Two - Set the background image for this slide in the line below -->
              <div class="carousel-item">
                <h2>Find a Unique Spot</h2>
                <br />
                <p>
                  With TravCP, you get to book unique <br />
                  spots, Experineces and also order <br />
                  Souvernirs straight from your home.
                </p>
                <div class="carousel-caption d-none d-md-block">
                  <!-- <h2 class="display-4">Second Slide</h2> -->
                </div>
              </div>
              <!-- Slide Three - Set the background image for this slide in the line below -->
              <div class="carousel-item">
                <h2>Find a Unique Spot</h2>
                <br />
                <p>
                  With TravCP, you get to book unique <br />
                  spots, Experineces and also order <br />
                  Souvernirs straight from your home.
                </p>
                <div class="carousel-caption d-none d-md-block">
                  <!-- <h2 class="display-4">Third Slide</h2> -->
                </div>
              </div>
            </div>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
              <button
                class="btn btn-primary"
                style="background-color: grey;border-color: grey;border-radius: 100px;"
              >
                -->
              </button>
              <span class="sr-only"> </span>
            </a>
          </div>
        </div>
      </div>
      <div class="form-inner">
        <div class="col-md-12 signin-form">
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
            <br />
            <div class="col-md-12">
              <form @submit.prevent="formSubmit">
                <div class="form-header">
                  <h3 style="visibility: hidden;">Sign in</h3> <br>
                  <p style="color: red" v-if="loginerrors">{{ loginerrors }}</p>
                </div>

                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-8">
                    <div class="my-custom-floating-label">
                      <FloatingLabel :config="{label: 'Email *', name: 'wrapper', line: false, scale: false,  classes: {error: 'has-error'}}">
                          <input 
                            type="email"
                            v-validate="'required|email'"
                            v-model="email"
                            name="email" />
                      </FloatingLabel>
                    </div>
                    <div style="color: #721c24;font-weight: bolder">{{ errors.first("email") }}</div>

                    <!-- <input
                      placeholder="Email"
                    /> -->
                  </div>
                  <div class="col-md-2"></div>
                </div>

                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="form-group col-md-8">
                    <div class="my-custom-floating-label">
                      <FloatingLabel :config="{label: 'Password *', name: 'wrapper', line: false, scale: false,  classes: {error: 'has-error'}}">
                          <input 
                          v-model="password" v-validate="'required'"
                          name="password"
                          type="password" />
                      </FloatingLabel>
                    </div>
                  <div style="color: #721c24;font-weight: bolder">{{ errors.first("password") }}</div>
                     
                  </div>
                  <div class="col-md-2"></div>
                </div>
                <br />
                <br />
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6" style="text-align: center;">
                    <button type="submit" class="btn btn-lg login-btn" :disabled="loading.userLogin">
                      <span v-if="loading.userLogin">
                        <img
                          style="height: 20px;"
                          src="../assets/loader_rolling.gif"
                        />
                      </span>
                      <span v-else>
                        Sign in
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-md-12">
                  <p class="not-a-mem">
                    Not a Member yet?
                    <router-link to="/signup">Sign up</router-link>
                  </p>
                </div>
                <div class="col-md-12">
                  <p class="not-a-mem">
                    <router-link to="/forgot-password">Forgot Password ?</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import FloatingLabel from "vue-simple-floating-labels";

export default {
  name: "Signin",
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      return next({ path: "/" });
    }
    next();
  },
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    formSubmit: function() {
      let data = {
        email: this.email,
        password: this.password
      };
      this.$validator.validateAll().then(result => {
        if (result) {
          this.userLogin({
            email: this.email,
            password: this.password
          }).then(data => {
            console.log(data)
            this.$noty.success('Login Successfull')
            window.location.reload(1);
          }).catch(error => {
            this.$noty.error('Oops, There was an erro while trying to login')
            console.log(error)
          })
            // .then(response => {
            //   console.log(response.data);
            //   return this.$noty.success("Login sucessfull!");
            // })
            // .catch(err => {
            //   console.log(err.data);
            //   this.$noty.error("Oops, something went wrong");
            // });
          // this.$noty.success("Login sucessfull")
        } else {
          this.$noty.error("Oops, something went wrong!");
        }
        // if (this.login_errors != null) {
        // 	this.$noty.error("Oops, something went wrong!")
        // 	// this.$noty.success("Login sucessfull")
        // } else {
        // 	// this.$noty.success("Login sucessfull")
        // }
      });
    }
  },
  computed: {
    ...mapState(["login_errors"]),
    ...mapState(["isLoading"]),
    ...mapState(['loading']),
    loginerrors() {
      // return Object.keys(this.login_errors).length >= 2;
      return this.login_errors;
    },
    errormessage() {
      if (this.loginerrors) {
        return this.loginerrors.error.message;
      }
    }
  },
  components: {
    Navbar,
    Footer, FloatingLabel
  }
};
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
@media (max-width: 1199px) {
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
    background: #fff;
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
.login-form-inner {
  background: #c0c2c4;
}
.signin-form {
  background: #fff;
  border-radius: 15px;
  height: 100%;
  width: 750px;
  padding: 130px 10px 10px 10px;
}
.login-btn {
  background: #f81894;
  border: none;
  /* padding: 44px 29px 39px 25px; */
  font-family: MuseoSans700;
  font-size: 16px;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  background-color: #f81894;
  color: #fff;
  margin-top: -10px;
}
.login-form-control {
  /*width: 200px;*/
  background: #d8d8d8;
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
.signin-image-holder {
  background: url(../assets/signin_hero_image.jpg) no-repeat;
  background-size: cover;
}
</style>
