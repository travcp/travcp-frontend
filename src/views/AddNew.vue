<template>
  <div class="container-fluid">
    <Navbar/>
    <!--About us start -->
    <div class="add-new-header">
      <p>About Us</p>
      <hr>
    </div>
    <div class="add-new-main">
      <div class="col-md-8 add-new-right">
        <div class="row">
          <div class="col-md-4">
            <p>Select Experience Type</p>
            <select>
              <option></option>
            </select>
          </div>
          <div class="col-md-4">
            <p>Select Experience Type</p>
            <select>
              <option></option>
            </select>
          </div>
          <div class="col-md-4">
            <p>Select Experience Type</p>
            <select>
              <option></option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-md-4 add-new-right"></div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AddNew",
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
.about-us-image-text-view p {
  padding-top: 20px;
  font-weight: bold;
  text-align: justify;
}
</style>