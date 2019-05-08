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
              <button type="button" class="btn view_all_btn">SEE ALL</button>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <div class="col-md-7">
                  <div class="feature_video_lg" data-toggle="modal" data-target="#video_1">

                  </div>
                </div>
                <div class="col-md-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_1">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6>Learn How to Travel Safely</h6>
                        <p>By John Doe</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_2">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6>Learn How to Travel Safely</h6>
                        <p>By John Doe</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_3">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6>Learn How to Travel Safely</h6>
                        <p>By John Doe</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature_video_sm ft_video_sm_4">
                      </div>
                      <div class="feature_video_sm_title">
                        <h6>Learn How to Travel Safely</h6>
                        <p>By John Doe</p>
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
</template>

<script>
export default {
  methods: {
    video_1(){
      $('#myModal').modal('show')
    }
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
