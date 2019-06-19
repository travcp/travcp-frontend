<template>
        <div class="digital_feature" style="margin-top: 100px">
          <div class="row">
            <div class="col-lg-8">
              <div class="d_feature_text">
                <div class="main_title">
                  <h2>Featured Videos</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <router-link to="/videos">
                  <button type="button" class="btn view_all_btn">SEE ALL</button>
              </router-link>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <div class="col-md-7">
                  <div class="feature_video_lg" data-toggle="modal" data-target="#video_1" :style="{background: 'url(http://img.youtube.com/vi/' + getVideoParam(videoData[0].url) + '/hqdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}" >

                  </div>
                </div>
                <div class="col-md-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_1" data-toggle="modal" data-target="#video_2" :style="{background: 'url(http://img.youtube.com/vi/' + getVideoParam(videoData[1].url) + '/hqdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6 class="card-title text-truncate">{{ videoData[1].title }}</h6>
                        <p>{{ videoData[1].video_category.name }}</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_2" data-toggle="modal" data-target="#video_3" :style="{background: 'url(http://img.youtube.com/vi/' + getVideoParam(videoData[2].url) + '/hqdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6 class="card-title text-truncate">{{ videoData[2].title }}</h6>
                        <p>{{ videoData[2].video_category.name }}</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_3" data-toggle="modal" data-target="#video_4" :style="{background: 'url(http://img.youtube.com/vi/' + getVideoParam(videoData[3].url) + '/hqdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6 class="card-title text-truncate">{{ videoData[3].title }}</h6>
                        <p>{{ videoData[3].video_category.name }}</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_4" data-toggle="modal" data-target="#video_5" :style="{background: 'url(http://img.youtube.com/vi/' + getVideoParam(videoData[4].url) + '/hqdefault.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6 class="card-title text-truncate">{{ videoData[4].title }}</h6>
                        <p>{{ videoData[4].video_category.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="modal fade" id="video_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="videoData[0].url">
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

          <div class="modal fade" id="video_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="videoData[1].url">
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


          <div class="modal fade" id="video_3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="videoData[2].url">
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


          <div class="modal fade" id="video_4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="videoData[3].url">
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


          <div class="modal fade" id="video_5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 700px;">
              <div class="modal-content">
                <div class="modal-body" style="padding: 0">
                  <iframe width="420" height="415" style="width: 100%" 
                  :src="videoData[4].url">
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
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      videoData: [],
      loading: false
    }
  },
  methods: {
    video_1(){
      $('#myModal').modal('show')
    },
    getVideos(){
      this.loading = false
      Axios.get(`${this.$store.state.API_BASE}/videos`).then(response => {
        console.log(response.data.data)
        this.videoData = response.data.data
        this.loading = false
      }).catch(error => {
        console.log(error.response.data)
        this.loading = false
      })
    },
    getVideoParam(url){
      var url_string = url; //window.location.href
      var url = new URL(url_string);
      // var c = url.searchParams.get("c");
      return url.pathname.slice(7)
    },
  },
  created(){
    this.getVideos()
  }
}
</script>

<style>
.modal-content {
  border: none;
}
.modal-btn-travv {

}
</style>
