<template>
  <div class="container-fluid">
    <Navbar/>
    <!--About us start -->
    <div class="add-new-header">
      <p>About Us</p>
      <hr>
    </div>
    <div class="container add-new-main">
      <div class="row">
        <div class="col-md-8 add-new-right">
          <div class="row input-main">
            <div class="col-md-4">
              <p class="text-main">Select Experience Type</p>
              <select class="select-row-one">
                <option>Select an option</option>
              </select>
            </div>
            <div class="col-md-4">
              <p class="text-main">City</p>
              <input class="input-text" type="text">
            </div>
            <div class="col-md-4">
              <p class="text-main">Language</p>
              <select class="select-row-one">
                <option>Select an option</option>
              </select>
            </div>
          </div>
          <div class="row input-main">
            <div class="col-md-4">
              <p class="text-main">Dates and Time</p>
              <select class="select-row-one">
                <option>Select an option</option>
              </select>
            </div>
            <div class="col-md-4">
              <p class="text-main">What tourists should bring along</p>
              <input class="input-text input-long" type="text">
            </div>
            <div class="col-md-4 add-new-margin">
              <p class="text-main">No. each tour can admit</p>
              <input class="input-text input-small" type="text">
            </div>
          </div>
          <div class="row input-main">
            <div class="col-md-4">
              <p class="text-main">About the experience designet</p>
              <input class="input-text input-wide" type="text">
            </div>
          </div>
          <div class="row input-main">
            <div class="col-md-4">
              <p class="text-main">Offering on tour(e.g snacks, drinks..)</p>
              <input class="input-text" type="text">
            </div>
            <div class="col-md-4">
              <p class="text-main">Price in Naira | Dollars | Pounds</p>
              <input class="input-text input-long" type="text">
            </div>
            <div class="col-md-4 add-new-margin">
              <p class="text-main">Clients meetup with map</p>
              <input class="input-text input-small" type="text">
            </div>
          </div>
          <div class="row input-main">
            <div class="col-md-8">
              <p class="text-main">About the experience designet</p>
              <input class="input-text input-mid" type="text">
            </div>
            <div class="col-md-4 last-row-input">
              <p class="text-main">Offering on tour(e.g snacks, drinks..)</p>
              <input class="input-text" type="text">
            </div>
          </div>
          <div class="button-main">
            <button class="button-submit">Submit</button>
          </div>
        </div>
        <div class="col-md-4 add-new-right">
          <div class="row pad-left">
            <p>Upload Image</p>
            <div class="add-new-image"></div>
          </div>
        </div>
      </div>
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
.add-new-header {
  padding-top: 3%;
}
.add-new-header p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
  text-align: center;
}
.add-new-main {
}
.add-new-header hr {
  width: 200px;
}
.select-row-one {
  width: 220px;
  height: 35px;
  border-radius: 10px;
}
.text-main {
  font-size: 12px;
}
.input-text {
  width: 220px;
  border-radius: 10px;
  padding-left: 5px;
  height: 35px;
}
.input-mid {
  width: 32vw;
  height: 70px;
}
.input-wide {
  width: 48vw;
  height: 70px;
  border-radius: 15px;
}
.input-main {
  margin-bottom: 30px;
}
.input-small {
  width: 150px;
}
.input-long {
  width: 300px;
}
.add-new-margin {
  padding-left: 85px;
}
.last-row-input {
  margin-top: 35px;
}
.about-us-main {
  background: #fafafa;
  height: auto;
}
.add-new-image {
  width: 200px;
  height: 200px;
  border: 5px solid grey;
}
.add-new-right {
}
.button-main {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
.button-submit {
  width: 100px;
  height: 35px;
  background-color: #f81894;
  color: #fff;
  border-radius: 5px;
}
.pad-left {
  padding-left: 130px;
  padding-top: 25px;
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