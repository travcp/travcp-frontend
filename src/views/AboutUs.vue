<template>
  <div class="container">
    <vue-headful
            title="About | TRAV CP"
            description="Description from TRAV CP"
        />
    <Navbar/>
    <!--About us start -->
    <div class="about-us-header">
      <p>About Us</p>
      <hr>
    </div>
    <div class="about-us-main">
      <!--first component -->
      <div class="row about-us-details-view">
        <div class="col-md-5 about-us-image"></div>
        <div class="col-md-6 about-us-image-text-view">
          <!-- <h5>LOREM IPSUM HEADER</h5> -->
          <h5>OUR VISION</h5> 
          <h6>
           Promoting a Positive African Narrative.
          </h6><br>

          <h5>OUR MISSION</h5>
          <h6>
           Our mission is to reveal the best of Africa to the world, by promoting tourist destinations and travel businesses
          </h6><br>

        </div>
      </div>
      <div class="row about-us-details-view">
        <div class="col-md-6 about-us-image-text-view" style="padding-left: 0%;">
          <!-- <h5>LOREM IPSUM HEADER</h5> -->
          
          <h5>SUMMARY</h5>
          <h6>
At TravCP we connect travelers to destinations, restaurants and locals in their cities of choice using the unique technology we have developed while providing security details on destinations to be visited to the travelers.
          </h6>

          <h6>
TravCP was founded to promote the best of Africa to the world thereby promoting a positive African Narrative. We do this by bridging the gap in the African tourism Industry through the promotion of both known and undiscovered tourist destinationsin Africa to local and international tourists. At TravCP, we say we are a global travel marketplace, connecting the world to Africa. Our intention is to have a ripple effect where we economically empower citizens in various African countries to monetize and grow their travel skills, talents and passion
          </h6><br>
        </div>
        <div class="col-md-5 about-us-image"></div>
      </div>
      <div class="row about-us-details-view">
        <div class="col-md-5 about-us-image"></div>
        <div class="col-md-6 about-us-image-text-view">

          <h5>LEADERSHIP</h5>
          <h6>Oluwafisayo Olayinka-Bello (Co-Founder & CEO)</h6>
          <h6>Tobiloba Williams (Co-Founder & CTO)</h6>
          <br>
          <h5>PRESS</h5>
          <h6>
            Projections/Trends: Not ready <br>
            Launch: Not ready (Will be sent soon) <br>
            BOD: Not ready <br>
            Investments: Not ready
          </h6> <br>
<!-- 
          <h5>GUIDEBOOK</h5>
          <h6>
            Each African Country <br>
            E.g. Nigeria <br>
            Linked to every experience, destination, blog post about Nigeria on one page. <br>
            See <a href="https://www.airbnb.com/s/Cape-Town--South-Africa/things-to-do">https://www.airbnb.com/s/Cape-Town--South-Africa/things-to-do</a> for reference.
          </h6> -->



        </div>
      </div>
        <div class="col-md-12 about-us-image-text-view text-center">
          <h5>GUIDEBOOK</h5>
          <h6 class="text-center">
            Each African Country <br>
            E.g. Nigeria <br>
            Linked to every experience, destination, blog post about Nigeria on one page. <br>
            See <a href="https://www.airbnb.com/s/Cape-Town--South-Africa/things-to-do">https://www.airbnb.com/s/Cape-Town--South-Africa/things-to-do</a> for reference.
          </h6>
        </div>
      <div class="row about-us-details-view">
        <div class="col-md-6 about-us-image-text-view" style="padding-left: 0%;">

          <h5>BECOME A MERCHANT</h5>
          <h6>
            You can create better visuals than this for the site, also, fell free to expatiate on this based on the flow you have created.
          </h6>
          <br>
          <h5>REQUIREMENTS</h5>
          <br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Basic Information</li>
            <li class="list-group-item">All the information on the google form</li>
            <li class="list-group-item">National Identity Card and/or CAC form</li>
            <li class="list-group-item">Any criminal records</li>
          </ul>


        </div>
        <div class="col-md-5 about-us-image"></div>
      </div>
      <div class="row about-us-details-view">
        <div class="col-md-5 about-us-image"></div>
        <div class="col-md-6 about-us-image-text-view">

          <h5>BENEFITS</h5> <br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Get discovered by local and international tourist.</li>
            <li class="list-group-item">Save time on booking processes</li>
            <li class="list-group-item">Expand and grow your bookings and bottom line</li>
            <li class="list-group-item">It is free to sign up and free to get bookings</li>
            <li class="list-group-item">You control the cancellation terms, cost of each booking</li>
            <li class="list-group-item">Easy and transparent booking managementprocess</li>
            <li class="list-group-item">You can easily connect with your clients and respond to messages</li>
            <li class="list-group-item">It is a platform designed to promote travel businesses in Africa and help each brand start and grow.</li>
          </ul>


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
  /*background: #fafafa;*/
  height: auto;
}
.about-us-details-view {
  padding-left: 10%;
  padding-right: 0;
  padding-top: 5%;
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
  padding-left: 5%;
}
.about-us-image-text-view h5 {
  color: #f81894;
  font-weight: bolder;
}
.about-us-image-text-view h6 {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}
</style>