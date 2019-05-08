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
                                    <h3>TravvApp</h3>
                                </div>
                                <ul>
                                    <li>About us</li>
                                    <li>Careers</li>
                                    <li>Press</li>
                                    <li>Policies</li>
                                    <li>FAQs</li>
                                </ul>
                            </aside>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <aside class="f_widget categories_widget">
                                <div class="f_w_title">
                                    <h3>Discover</h3>
                                </div>
                                <ul>
                                    <li>Trust & Safety</li>
                                    <li>Travel Credit</li>
                                    <li>Group Tour</li>
                                    <li>Guidebooks</li>
                                    <li>TravvApp Mag</li>
                                </ul>
                            </aside>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <aside class="f_widget categories_widget">
                                <div class="f_w_title">
                                    <h3>Merchants</h3>
                                </div>
                                <ul class="">
                                    <li class="">
                                        <a class="" href="#merchant-signup-modal" data-toggle="modal">Register</a>
                                    </li>
                                    <li>Requirements</li>
                                    <li>Benefits</li>
                                    <li>Community</li>
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
                        <h5>TravvApp</h5>
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
        </footer>
        
</template>

<script>
import MerchantSignupModal from '@/views/MerchantSignupModal'
export default {
    name: 'Footer',
    components: {MerchantSignupModal}
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
