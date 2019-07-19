<template>
  <div class="container">
    <vue-headful
            title="Policies | TravCP"
            description="Description from TravCP"
        />
    <Navbar/>
    <!--About us start -->
    <div class="about-us-header">
      <p>Policies</p>
      <hr>
    </div>
    <div class="about-us-main">
      <!--first component -->
      <div class="row about-us-details-view">
        <div class="col-md-5 about-us-image"></div>
        <div class="col-md-6 about-us-image-text-view">
          <h5>LOREM IPSUM HEADER</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vero nostrum fugiat. In, modi beatae. Voluptate cumque reiciendis sunt modi sequi. Temporibus exercitationem laudantium soluta quasi odio esse. Minus, aspernatur!</p>
        </div>
      </div>

      <!--second component -->
      <div class="row about-us-details-view remove-pad">
        <div class="col-md-6 about-us-image-text-view right-pad">
          <h5>LOREM IPSUM HEADER</h5>
          <p
            class="pad-text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vero nostrum fugiat. In, modi beatae. Voluptate cumque reiciendis sunt modi sequi. Temporibus exercitationem laudantium soluta quasi odio esse. Minus, aspernatur!</p>
        </div>
        <div class="col-md-5 about-us-image pad"></div>
      </div>
      <!--first component -->
      <div class="row about-us-details-view">
        <div class="col-md-5 about-us-image"></div>
        <div class="col-md-6 about-us-image-text-view">
          <h5>LOREM IPSUM HEADER</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vero nostrum fugiat. In, modi beatae. Voluptate cumque reiciendis sunt modi sequi. Temporibus exercitationem laudantium soluta quasi odio esse. Minus, aspernatur!</p>
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