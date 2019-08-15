<template>
  <div class="container">
    <vue-headful
            title="Copyright Policy | TravCP"
            description="Copyright Policy from TravCP"
        />
    <Navbar/>

<div class="wrapper">
    <div class="page-header page-header-small">
      <!-- <img src="../assets/landing_images/background_2.jpg" alt="Landing" srcset=""> -->
      <div class="page-header-image" data-parallax="true">
      </div>
      <div class="content-center">
        <div class="container">
          <h1 class="title" style="color: #FFF;">Copyright Policy</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Notification of Copyright Infringement</h2>

            <h5 class="description">TravCP, Ltd. ("TravCP") respects the intellectual property rights of others and expects its users to do the same.</h5>
            <h5 class="description">
              It is TravCP’s policy, in appropriate circumstances and at its discretion, to disable and/or terminate the account or access of users who repeatedly infringe or are repeatedly charged with infringing the copyrights or other intellectual property rights of TravCP.
            </h5>
            <h5 class="description">
              In accordance with the <b>Nigerian Copyright</b> Act, CAP C28, Laws of the Federation of <b>Nigeria</b>, 2004, TravCP will respond expeditiously to claims of copyright infringement committed using the TravCP website and mobile application (the "Site and Application") that are reported to TravCP’s Designated Copyright Agent, identified in the sample notice below.
            </h5>
            <h5 class="description">
              If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site and Application by completing a Notice of Alleged Infringement and delivering it to TravCP’s Designated Copyright Agent. Upon receipt of the Notice as described below, TravCP will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged material from the Site and Application.
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Notice of Alleged Infringement ("The Notice")</h2>
            <ol class="text-left">
              <li>
                <h5 class="description">
                  Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you will providea comprehensive list of the copyrighted works that you claim have been infringed.
                </h5>
              </li>
              <li>
                <h5 class="description">
                  Identify the material that you claim is infringing (or to be the subject ofinfringing activity) and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material, including at a minimum, if applicable, the URL of the link shown on the Site and Application where such material may befound.
                </h5>
              </li>
              <li>
                <h5 class="description">
                  Provide your mailing address, telephone number, and, if available, email address.
                </h5>
              </li>
              <li>
                <h5 class="description">
                  Include both of the following statements in the body of the Notice:
                  <ul style="list-style-type: circle;margin-left: 40px; font-size: 16px;">
                    <li>
                      <h5 class="description">
                        "I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."
                      </h5>
                    </li>
                    <li>
                      <h5 class="description">
                        "I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."
                      </h5>
                    </li>
                  </ul>
                </h5>
              </li>
              <li>
                <h5 class="description">
                  Provide your full legal name and your electronic or physical signature.
                </h5>
              </li>
            </ol>
            <br><br>
                <h5 class="description">
                  Deliver this Notice, with all items completed, to TravCP’s Designated Copyright Agent:
                </h5><br>
                <h5 class="description">
                  Copyright Agent <br>
                  c/o TravCP, Ltd. <br>
                  Ikeja, Lagos, <br><br>
                  Nigeria. <br>
                  <a href="mailto:copyright@TravCP.com">copyright@TravCP.com</a>
                </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview"> 
        </div>
      </div>
    </div> 

  </div>

  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Press",
  components: {
    Navbar
  }
};
</script>
<style scoped> 
.about-us-header {
  padding-top: 3%;
}
.about-us-header p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
  text-align: center;
}
.about-us-header hr {
  width: 200px;
}
.about-us-main {
  background: #fafafa;
  height: auto;
}
.about-us-details-view {
  padding-left: 10%;
  padding-right: 0;
  padding-top: 5%;
  padding-bottom: 5%;
}
.about-us-image {
  background: url("../../assets/ueno.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}
.right-pad {
  padding-right: 5%;
}
.remove-pad {
  padding-left: 5%;
}
.text-width {
  width: 50%;
}
.about-us-image-text-view {
  padding-left: 5%;
}
.about-us-image-text-view h5 {
  color: #f81894;
  font-weight: bolder;
}
.about-us-image-text-view p {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}
</style>
<style scoped>
.wrapper {
    min-height: 0; 
    display: block;
}
.about-us-header {
  padding-top: 3%;
}
.about-us-header p {
  font-size: 3em;
  font-weight: bolder !important;
  color: #f81894;
  text-align: center;
}
.about-us-header hr {
  width: 200px;
}
.about-us-main {
  /*background: #fafafa;*/
  height: auto;
}
.about-us-details-view {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  /*padding-bottom: 5%;*/
}
.about-us-image {
  background: url("../../assets/ueno.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
}
.right-pad {
  padding-right: 5%;
}
.remove-pad {
  padding-left: 5%;
}
.text-width {
  width: 50%;
}
.about-us-image-text-view {
  /* padding-left: 5%; */
  font-size: 1.4rem;
  font-weight: 100;
  line-height: 2.4rem;
  color: #333;
}
.about-us-image-text-view h5 {
  color: #a1969c;
  font-size: 1.7rem;
  font-weight: 900;
  line-height: 3.2rem;
  color: #212121;
}
.about-us-image-text-view h6 {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}
.btn-round {
    border-radius: 100%;
    margin: 5px;
}
.navbar{
  box-shadow: none !important;
}
.btn-primary {
    background-color: rgb(248, 24, 148) !important;
    color: #FFFFFF !important;
}

.page-header-image {
    background: url('../../assets/landing_images/background_2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left {
    background: url('../../assets/landing_images/background_4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-right {
    background: url('../../assets/landing_images/background_3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left-2 {
    background: url('../../assets/landing_images/background_1.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 10px;
}
.section-story-overview .image-container {
  margin-left: 0;
}
.team-player img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: -60px;
}
</style>
<style scoped src='../../assets/css/demo.css'>
</style>
<style scoped src='../../assets/css/now-ui-kit.css'>
</style>
