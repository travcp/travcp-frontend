<template>
  <div class="container">
    <vue-headful
            title="Requirements | TRAV CP"
            description="Description from TRAV CP"
        />
    <Navbar/>
    <!--About us start -->
    <div class="about-us-header">
      <p>Benefits</p>
      <hr>
    </div>
    <div class="row">
      <div class="col-md-12">
        
        <div class="section section-team text-center">
          <div class="container">
            <div class="team">
              <div class="row" style="justify-content: center;">
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-map-marker-alt fa-3x"></i>
                    <h4 class="title">Get discovered by local and international tourist.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-clock fa-3x"></i>
                    <h4 class="title">Save time on booking processes.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-chart-line fa-3x"></i>
                    <h4 class="title">Expand and grow your bookings and bottom line.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <h2 style="font-weight: 900 !important;">ZERO</h2>
                    <h4 class="title">It is free to sign up and free to get bookings.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-money-check-alt fa-3x"></i>
                    <h4 class="title">You control the cancellation terms, cost of each booking.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-tasks fa-3x"></i>
                    <h4 class="title">Easy and transparent booking management process</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-comment-dots fa-3x"></i>
                    <h4 class="title">You can easily connect with your clients and respond to messages</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
                <div class="col-md-4" style="padding: 30px 15px 30px 15px !important;">
                  <div class="team-player">
                    <i class="fa fa-business-time fa-3x"></i>
                    <h4 class="title">It is a platform designed to promote travel businesses in Africa and help each brand start and grow.</h4>
                    <!-- <p class="category text-primary">Basic Information</p> -->
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us-main"> 
       
    <div class="about-us-header">
      <p>Merchant Requirements</p>
      <hr>
    </div>
    <div class="about-us-main text-center"> 
     <ul id="FAQ" class="faq">

      <li>
        <div class="faq-q">
          Personal Information
        </div>
      </li>
      <li>
        <div class="faq-q">
          Business Details
        </div>
      </li>
      <li>
        <div class="faq-q">
          National Identity Card
        </div>
      </li>
      <li>
        <div class="faq-q">
          Details of Experience, Tour, Place or Restaurant
        </div>
      </li>
    </ul>
     <router-link to="/signin">
      <button class="btn btn-primary btn-lg" style="width: 250px;background: #555;">Sign in to Become a Merchant</button>
     </router-link>
    </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Benefits",
  components: {
    Navbar
  }
};
</script>
<style scoped>
.col-md-4 .fa, h2 {
  color: #f81894;
}
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

.faq {
  list-style: none;
  width: 94%;
  padding: 3%;
  max-width: 800px;
  margin: 0 auto;
  color: #FFF;
}
.faq li {
  margin-bottom: 1em;
  position: relative;
}

.faq-q {
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  background: rgb(248, 24, 148);
  padding: .5em;
  border-radius: 5px;
  transition: .5s ease-in;
}
.faq-q:hover {
  background: #555;
}

.faq-a {
  display: none;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  margin-left: 5px;
}
.navbar{
  box-shadow: none !important;
}
</style>
<style scoped src='../../assets/css/demo.css'>
</style>
<style scoped src='../../assets/css/now-ui-kit.css'>
</style>