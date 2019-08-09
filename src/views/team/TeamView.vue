<template>
  <div class="container">
    <vue-headful
      title="Oluwafisayo Olayinka-Bello is the Founder and CEO of TravCP | TravCP"
      description="Description from TravCP"
    />
    <Navbar />

    <div class="wrapper">
      <div class="page-header clear-filter page-header-small" filter-color="orange">
        <div class="page-header-image" data-parallax="true"></div>

        <div class="container">
          <div class="photo-container">
            <img src="../../assets/landing_images/14987979565412122634.png" alt />
          </div>

          <h3 class="title">Oluwafisayo Olayinka-Bello</h3>
          <p class="category">Founder & CEO</p>
        </div>
      </div>
    </div>
    <div class="row" style="justify-content: center">

        <div class="col-md-8 section" stylw="padding-top: 0">
            <div class="container">
                <div class="button-container">
                    <a href="https://twitter.com/thefisayo" target="_blank" class="btn btn-primary btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Twitter"> <i class="fab fa-twitter"></i></a>
                    <!-- <a href="#button" class="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Twitter">
                        
                    </a> -->
                    <a href="https://www.instagram.com/thefisayo/" target="_blank" class="btn btn-primary btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Instagram">  <i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/oluwafisayo-olayinka-bello-29902081/" target="_blank" class="btn btn-primary btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Linkedin">  <i class="fab fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/thefisayo" target="_blank" class="btn btn-primary btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Youtube">  <i class="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/TravCP/" target="_blank" class="btn btn-primary btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Facebook">  <i class="fab fa-facebook"></i></a>

                </div>

                <h3 class="title" style="color: #555">About me</h3>
                <h5 class="description">Fisayo is a tourism development advocate, travel writer, podcast host, producer, big dreamer and innovator who thrives at the intersection of tourism, technology and advocacy. She sets the company’s strategy and drives TravCP’s vision to model Africa to be the number one tourist destination in the world.</h5>
                <h5 class="description">
                Her write-ups on her personal site <a href="https://www.thefisayo.com" target="_blank">thefisayo.com</a> and YouTube videos have brought her much acclaim, which got her featured on: PUNCH, THENET, TVC, STV, PLUSE, and more. Within 3 years of writing, she has been nominated for three awards-as the Best Tourism Innovation Using Technology, Tourism Blog of the year, & Choice Blogger Award. The Covenant University Alum and former campus ambassador for Bank of America Merrill Lynch is an innovator, and problem solver who leverages her background in marketing, human resource management, entrepreneurship and leadership. She has worked on several tourism projects with the Nigerian government to strategize the promotion of tourism in certain states. She is a doer. With her background and love for Africa, entrepreneurship and problem solving, Fisayo founded TravCP.
                </h5>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "TeamView",
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
.navbar {
  box-shadow: none !important;
}
.btn-primary {
  background-color: rgb(248, 24, 148) !important;
  color: #ffffff !important;
}

.page-header-image {
  background: url("../../assets/landing_images/background_2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.section-story-overview .image-container {
  margin-left: 0;
}
.photo-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: -60px;
  border-radius: 50%;
}
.title {
  color: #fff;
}
.section {
    position: relative;
    background: #FFFFFF;
    justify-content: center;
    text-align: center;
    padding: 0 10px;
} 
.button-container {
    position: relative;
    top: -40px;
}
</style>
<style scoped src='../../assets/css/demo.css'>
</style>
<style scoped src='../../assets/css/now-ui-kit.css'>
</style>
