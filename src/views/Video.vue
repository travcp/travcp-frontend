<template>
  <div class="container main">
    <vue-headful
            title="Videos | TravvApp"
            description="Description from travvApp"
        />
    <Navbar/>
    <!-- booking header details left -->
    <div class="row my-booking-left">
      <div class="col-lg-9 my-booking-header">
        <div class="my-booking-title" @click="getVideos()">
          <p>Videos</p>
          <hr class="my-booking-title-horizontal">
        </div>
        <div class="row">
         <!--  <div class="feature_video_lg" data-toggle="modal" data-target="#video_1">

                  </div> -->


          <div v-for="video in videoData" :key="video.id" class="modal fade" :id="'video' + video.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="video.url">
                  </iframe>
                </div>
                <div class="modal-footer" style="padding: 0;border-top: none;">
                  <div class="row" style="width: 100%;">
                    <div class="col-md-12" style="text-align: center">
                      <!-- <p>Share</p> -->
                       <button type="button" class="btn modal-btn-travv" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4" v-for="video in videoData" :key="video.id">

            <div class="card">
              <img :src="'http://img.youtube.com/vi/' + getVideoParam(video.url) +'/hqdefault.jpg'"  data-toggle="modal" :data-target="'#video' + video.id" class="card-img-top cursor-pointer" alt="...">
             <!--  <iframe class="card-img-top"style="width: 100%" 
                  :src="video.url">
                  </iframe> -->
                  <!-- {{ getVideoParam(video.url) }} -->
                  <!-- <iframe :src="video.url"  allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe> -->
              <div class="card-body">
                <h5 class="card-title text-truncate"><span style="">{{ video.title }}</span></h5>
                <p style="  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow:hidden">
                  {{ video.description }}
                </p>
                <footer class="blockquote-footer text-right" style="text-transform: capitalize;cursor: pointer;" @click="getVideoByCat(video.video_category.id)">{{ video.video_category.name }}</footer>
              </div>


          <div class="modal fade" :id="getVideoParam(video.url)" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  src="https://www.youtube.com/embed/A3PDXmYoF5U">
                  </iframe>
                </div>
                <div class="modal-footer" style="padding: 0;border-top: none;">
                  <div class="row" style="width: 100%;">
                    <div class="col-md-12" style="text-align: center">
                      <!-- <p>Share</p> -->
                       <button type="button" class="btn modal-btn-travv" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

            </div>
          </div>
        </div>
      </div>
      <!-- booking header details right -->
      <div class="col-lg-3">
        <div class="video-details-right">
          <div class="feature-places-title">
            <p class="feature-places-title-p1">Featured Places</p>
            <p class="feature-places-title-p2"><router-link to="/places">SEE ALL</router-link></p>
          </div>
          <div>
              <router-link v-for="place in places.slice(0, 3)" :key="place.id" :to="'/experience/'+ place.id + '/' + place.title">
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed" style="height: auto">
                  <div class="row">
                    <div class>
                      <p class="ftr_places_title video-right-p-text" style="padding: 6px 0 15px 25px;">{{ place.city }}</p>
                    </div>
                    <div class="video-right-div-2">
                      <!-- <p class="ftr_places_title video-right-p-text">{{ place.number_admittable }}</p>
                      <p class="ftr_places_title video-right-p-text">{{ place.rating_count }}</p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div> 
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';
import Axios from 'axios'
export default {
  name: "Video",
  components: {
    Navbar,
    Footer
  },
  data(){return {
    loading: false,
    videoData: []
  }},
  computed: {
    ...mapState(['places']),
  },
  methods: {
    getVideos(){
      this.loading = true
      Axios.get(`${this.$store.state.API_BASE}/videos`).then((response) => {
        console.log(response.data.data)
        this.loading = false
        this.videoData = response.data.data
      }).catch(error => {
        console.log(error.data)
        this.loading = false
      })
    },
    getVideoParam(url){
      var url_string = url; //window.location.href
      var url = new URL(url_string);
      // var c = url.searchParams.get("c");
      return url.pathname.slice(7)
    },
    getVideoByCat(catergory){
      Axios.get(`${this.$store.state.API_BASE}/videos?video_category_id=${catergory}`).then((response) => {
        console.log(response.data.data)
        this.loading = false
        this.videoData = response.data.data
      }).catch(error => {
        console.log(error.data)
        this.loading = false
      })
    }
  },
  created(){
    this.getVideos()
  }
};
</script>
<style scoped>
.card {
  margin-bottom: 20px;
}
.main {
  /*padding-top: 100px;*/
}
.my-booking-left {
  margin-top: 70px;
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
