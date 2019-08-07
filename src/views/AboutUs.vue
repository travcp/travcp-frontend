<template>
  <div class="container">
    <vue-headful
            title="About | TravCP"
            description="Description from TravCP"
        />
    <Navbar/>

<div class="wrapper">
    <div class="page-header page-header-small">
      <!-- <img src="../assets/landing_images/background_2.jpg" alt="Landing" srcset=""> -->
      <div class="page-header-image" data-parallax="true">
      </div>
      <div class="content-center">
        <div class="container">
          <h1 class="title" style="color: #FFF;">About TravCP</h1>
          <div class="text-center">
            <a href="#" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">At <span style="color: #f81894; font-weight: 900"> TravCP </span> Our Vision is to Model Africa to be the number one tourist  destination in the world.</h5>
            <h5 class="description">Our entire team and operations is dedicated to showcasing the best of Africa to the world, by promoting tourist destinations, and travel businesses</h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div class="image-container image-left">
                
                <p class="blockquote blockquote-primary">"If I have ever seen magic, it has been in Africa"
                  <br>
                  <br>
                  <small>- John Hemminngway</small>
                </p>
              </div>
              
              <div class="image-container image-left-2"></div>
            </div>
            <div class="col-md-5">
              
              <div class="image-container image-right"></div>
              <h3>Here's what we are the best at!</h3>
              <p>We connect travelers to destinations, restaurants and locals in their cities of choice using the unique technology we have developed while providing security details on destinations to be visited to the travelers.
              </p>
              <p>
                TravCP was founded to promote the best of Africa to the world thereby promoting a positive African Narrative. We do this by bridging the gap in the African tourism Industry through the promotion of both known and undiscovered tourist destinationsin Africa to local and international tourists. At TravCP, we say we are a global travel marketplace, connecting the world to Africa. Our intention is to have a ripple effect where we economically empower citizens in various African countries to monetize and grow their travel skills, talents and passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row" style="justify-content: center;">
            <div class="col-md-4" style="padding: 0;">
              <div class="team-player">
                <img src="../assets/landing_images/14987979565412122634.png" alt="Thumbnail Image" class="rounded-circle img-fluid img-raised">
                <h4 class="title">Oluwafisayo Olayinka-Bello</h4>
                <p class="category text-primary">(Founder & CEO)</p>
                <p class="description">
                  Fisayo is a tourism development advocate, travel writer, podcast host, producer, big dreamer and innovator who thrives at the intersection of tourism, technology and advocacy. She sets the company’s strategy and drives TravCP’s vision to model Africa to be the number one tourist destination in the world.
                </p>
                <router-link to="/team/fisayo"><button class="btn btn-link btn-info">Read More About Me</button></router-link>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"><i class="fab fa-twitter"></i></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"><i class="fab fa-instagram"></i></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"><i class="fab fa-facebook-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AboutUs",
  components: {
    Navbar
  }
};
</script>
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
  background: url("../assets/ueno.png");
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
    background: url('../assets/landing_images/background_2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left {
    background: url('../assets/landing_images/background_4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-right {
    background: url('../assets/landing_images/background_3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left-2 {
    background: url('../assets/landing_images/background_1.jpg');
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
<style scoped src='../assets/css/demo.css'>
</style>
<style scoped src='../assets/css/now-ui-kit.css'>
</style>
