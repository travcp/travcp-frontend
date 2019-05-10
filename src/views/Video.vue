<template>
  <div class="container main">
    <Navbar/>
    <!-- booking header details left -->
    <div class="row my-booking-left">
      <div class="col-lg-9 my-booking-header">
        <div class="my-booking-title">
          <p>Videos</p>
          <hr class="my-booking-title-horizontal">
        </div>
        <div class="row video-images">
          <div class="col-md video-details-image" data-toggle="modal" data-target="#video-modal">
            <p
              class="video-text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo</p>
          </div>
          <div
            class="modal fade"
            id="video-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog"
              role="document"
              style="max-width: 60%; margin-top: 5%; height: 400px"
            >
              <div class="modal-content modal-style">
                <div class="modal-body" style="padding: 0">
                  <button
                    type="button"
                    class="close modal-button-style"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <iframe
                    width="420"
                    height="415"
                    style="width: 100%"
                    src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  ></iframe>
                </div>
                <div class="modal-footer" style="padding: 0;border-top: none;">
                  <div class="row" style="width: 100%;">
                    <div class="col-md-12" style="text-align: center">
                      <!-- <p>Share</p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md video-details-image"></div>
          <div class="col-md video-details-image"></div>
          <div class="col-md video-details-image"></div>
        </div>
        <div class="row video-images">
          <div class="col-md video-details-image"></div>
          <div class="col-md video-details-image"></div>
          <div class="col-md video-details-image"></div>
          <div class="col-md video-details-image"></div>
        </div>
      </div>
      <!-- booking header details right -->
      <div class="col-lg-3">
        <div class="video-details-right">
          <div class="feature-places-title">
            <p class="feature-places-title-p1">Featured Places</p>
            <p class="feature-places-title-p2">SEE ALL</p>
          </div>
          <div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class>
                      <p class="ftr_places_title video-right-p-text">SAITAMA</p>
                    </div>
                    <div class="video-right-div-2">
                      <p class="ftr_places_title video-right-p-text">221</p>
                      <p class="ftr_places_title video-right-p-text">50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class>
                      <p class="ftr_places_title video-right-p-text">SAITAMA</p>
                    </div>
                    <div class="video-right-div-2">
                      <p class="ftr_places_title video-right-p-text">221</p>
                      <p class="ftr_places_title video-right-p-text">50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class>
                      <p class="ftr_places_title video-right-p-text">SAITAMA</p>
                    </div>
                    <div class="video-right-div-2">
                      <p class="ftr_places_title video-right-p-text">221</p>
                      <p class="ftr_places_title video-right-p-text">50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: "MyBooking",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.main {
  padding-top: 100px;
}
.my-booking-left {
  margin-top: 30px;
}
.video-details-image {
  background-image: url("../assets/videoImage.jpg");

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 150px;
  margin: 10px;
}
.video-text {
  color: #fff;
  margin-top: 80px;
  font-size: 18px;
}
.modal-content {
  border: none;
  z-index: -1;
}
.video-details-inner {
  padding-top: 40px;
}
.my-booking-header {
}
.video-details-right {
}

.video-images {
}
.video-text {
  font-size: 10px;
  color: #fff;
}
.changed {
  height: 200px;
  width: 180px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background: url("../assets/nagoya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.feature-places-title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.feature-places-title-p1 {
  font-weight: bold;
}
.feature-places-title-p2 {
  color: #f81894;
  font-size: 14px;
}
.overlay-changed {
  background-color: #f81894;
  opacity: 0.6;
}
.my-booking-title {
  text-align: center;
  padding-bottom: 20px;
}
.my-booking-title p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
}
.my-booking-title-horizontal {
  width: 300px;
}

.video-right-div-2 {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin-left: 20px;
}
.video-right-p-text {
  font-size: 14px;
  color: #fff;
}
.modal-style {
  background-color: transparent;
}
.modal-button-style {
  justify-content: flex-end;
  color: #fff;
  outline: transparent;
}
</style>
