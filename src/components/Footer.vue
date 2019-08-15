<template>
    <footer class="footer_area">
        <div class="container">
            <div class="footer_widgets_area">
                <div class="container">
                    <div class="f_widgets_inner row">
                        <div class="col-lg-3 col-md-6">
                            <img class="app-store" style="  width: 139px;
  height: 41px;margin-bottom: 9px;" src="../assets/app_store.png" />
                            <img style="  width: 139px;
  height: 41px;" src="../assets/google_play.png" />
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <aside class="f_widget categories_widget">
                                <div class="f_w_title">
                                    <h3>TravCP</h3>
                                </div>
                                <ul>
                                    <li><router-link to="/about-us">About us</router-link></li>
                                    <li><router-link to="/careers">Careers</router-link></li>
                                    <li><router-link to="/press">Press</router-link></li>
                                    <li><router-link to="/policies">Policies</router-link></li>
                                    <li><router-link to="/faqs">FAQs</router-link></li>
                                </ul>
                            </aside>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <aside class="f_widget categories_widget">
                                <div class="f_w_title">
                                    <h3>Discover</h3>
                                </div>
                                <ul>
                                    <!-- <li><router-link to="/trust-and-safety">Trust & Safety</router-link></li>
                                    <li><router-link to="/travel-credit">Travel Credit</router-link></li>
                                    <li><router-link to="/group-tour">Group Tour</router-link></li>
                                    <li><router-link to="/guidebooks">Guidebooks</router-link></li> -->
                                    <li><a href="https://brimatel.com/travvcp">TravCP Blog</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <aside class="f_widget categories_widget">
                                <div class="f_w_title">
                                    <h3>Merchants</h3>
                                </div>
                                <ul class="" style="width: 100%;">
                                    <li v-if="auth && checkUserType != 'merchant'" class="" @click="confirmUserType()">
                                        <a class="" href="#merchant-signup-modal" data-toggle="modal">Become a Merchant</a>
                                    </li>
                                    <li v-if="auth && checkUserType == 'merchant'">
                                        <router-link to="/dashboard/profile">Your Dashboard</router-link>
                                    </li>
                                    <li><a class="" href="#affiliate-modal" data-toggle="modal">Affiliate</a></li>
                                    <!-- <li><router-link to="/requirements">Requirements</router-link></li> -->
                                    <li><router-link to="/benefits">Benefits</router-link></li>
                                    <li>
                                        <a href="https://brimatel.com/travvcp/forum/">Community</a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
        <div class="copy_right_area">
                    <div class="float-md-left">
                        <h5>{{ $store.state.appName }}</h5>
                    </div>
                    <div class="float-md-right">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Privacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Site Map</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img src="../assets/icons8-facebook-f-filled.svg" style="width: 15px; margin-right: 18.8px;" /> 
                                    <img src="../assets/icons8-twitter.svg" style="width: 15px;margin-right: 18.8px;" /> 
                                    <img src="../assets/icons8-first-logo-of-instagram-filled.svg" style="width: 15px;" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <merchant-signup-modal></merchant-signup-modal>
            <AffiliateMdoalBox></AffiliateMdoalBox>
        </footer>
        
</template>

<script>
import MerchantSignupModal from '@/views/MerchantSignupModal'
import { mapState, mapActions } from 'vuex';
import AffiliateMdoalBox from '@/components/AffiliateMdoalBox.vue'
export default {
    name: 'Footer',
    components: {MerchantSignupModal, AffiliateMdoalBox},
    methods: {
      checkUser() {
          return this.auth != null ? true : false
      },
    //   gotoForum(e){
    //       e.preventDefault();
          
    //       if(this.$store.state.auth){
    //           location.href = "http://travvapi.herokuapp.com/travvforum?token="+this.$store.state.auth.access_token
    //       }
    //       else{
    //           location.href = "http://travvapi.herokuapp.com/travvforum"
    //       }
    //   },
      confirmUserType(){
        if (this.checkUserType == 'user'){
            return true
        } else if(this.checkUserType == 'not Logged in') {
            this.$router.push("/signup")
            return false
        }
      }
    },
    computed: {
        ...mapState(['auth']),
      checkUserType(){
        if(this.auth){
            return this.auth.user.role
        }
        return 'not Logged in'
      }
    }
}
</script>

<style scoped>
.footer_widgets_area{
    background : #FFF;
}
.footer_area{
    background: none;
    border-top: 2px solid #eee;
}
.f_w_title{
    padding-bottom: 15px;
}
.f_w_title h3{
    font-family: MuseoSans300 !important;
    font-weight: bold;
    color: #F81894;
    font-size: 1.4em;
}
.categories_widget ul li {
    font-family: MuseoSans300 !important;
    font-weight: bold;
    color: #555;
}
.copy_right_area {
    border-top: 2px solid #eee;
    background: none;
}
</style>
