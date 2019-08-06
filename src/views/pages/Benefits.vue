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
    <div class="about-us-main"> 
     <ul id="FAQ" class="faq">
		  <li>
		    <div class="faq-q">
		      Get discovered by local and international tourist.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		     	Save time on booking processes.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		     	Expand and grow your bookings and bottom line.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		     	It is free to sign up and free to get bookings.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		     	You control the cancellation terms, cost of each booking.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		     Easy and transparent booking management process
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		      You can easily connect with your clients and respond to messages.
		    </div>
		  </li>
		  <li>
		    <div class="faq-q">
		      It is a platform designed to promote travel businesses in Africa and help each brand start and grow.
		    </div>
		  </li>
		</ul>
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
</style>