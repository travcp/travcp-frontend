<template>
  <div>
    <vue-headful
      title="Verify | TravCP"
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
                  <h3 style="margin-bottom: 10px;">Verify</h3>
                  <p style="color: red;margin-bottom: 39px" v-if="error_message">{{ error_message.message }}</p>
                  <p style="color: blue;margin-bottom: 39px" v-if="message">{{ message }}</p>
                </div>
              </form>
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
import axios from 'axios';

export default {
  name: "Verify",
  data: function() {
    return {
      email: null,
      loading: false,
      error_message: null,
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    verifyAUser(){
      this.loading = true
      axios.post(`${this.$store.state.API_BASE}/auth/verify`, {
              "token": this.$route.query.token,
              "user_id": this.$route.query.user_id
            })
            .then(response => {
              console.log(response.data.data)
              this.$router.push("/");
              this.loading = false
            }).catch(error => {
              console.log(error.response.data)
              this.loading = false
            })
    },
  },
  computed: {
    
  },
  components: {
    Navbar,
    Footer
  },
  created(){
    if (!this.$route.query.token && !this.$route.query.user_id) {
      this.$router.push("/");
    }
    console.log(this.verifyAUser())
    console.log(this.$route)
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
  background: url(../../assets/signin_hero_image.jpg) no-repeat;
  background-size: cover;
}
</style>
