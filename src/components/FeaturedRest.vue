<template>
  <div class="digital_feature" style="margin-top: 100px">
    <div class="row">
      <div class="col-lg-8">
        <div class="d_feature_text">
          <div class="main_title">
            <h2>Featured Restaurants</h2>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <router-link to="/restaurants"><button type="button" class="btn view_all_btn">SHOW ALL RESTAURANTS</button></router-link>
      </div>
      <div class="col-lg-12">

        <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <div class="featured_places saitama">
                <div class="featured_places_item">
                  <div class="featured_places_overlay">
                    <div class="row">
                      <div class="col-md-7">
                        <p class="ftr_places_title">SAITAMA</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">221</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-interval="20000">
              <div class="featured_places ueno">
                <div class="featured_places_item">
                  <div class="featured_places_overlay">
                    <div class="row">
                      <div class="col-md-7">
                        <p class="ftr_places_title">UENO</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">221</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="featured_places shibuya">
                <div class="featured_places_item">
                  <div class="featured_places_overlay">
                    <div class="row">
                      <div class="col-md-7">
                        <p class="ftr_places_title">SHIBUYA</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">221</p>
                      </div>
                      <div class="col-md-2">
                        <p class="ftr_places_title">50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container toggleCarousel">
          <div class="row">
            <div class="col-md-4 left_feature_place" v-for="restaurant in restaurants" :key="restaurant.id"
              style="padding-left: 0px; padding-right: 24px;">
              <router-link :to="'/restaurants/'+ restaurant.id + '/' + restaurant.location">
                <div class="featured_places saitama">
                  <div class="featured_places_item">
                    <div class="featured_places_overlay">
                      <div class="row">
                        <div class="col-sm-7 col-md-7">
                          <p class="ftr_places_title">SAITAMA</p>
                        </div>
                        <div class="col-sm-2 col-md-2">
                          <p class="ftr_places_title">221</p>
                        </div>
                        <div class="col-sm-2 col-md-2">
                          <p class="ftr_places_title">50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </router-link>
            </div>
            <!-- <div class="col-md-4 middle_feature_place" style="padding-left: 24px;padding-right: 24px;">
                    <div class="featured_places ueno">
                      <div class="featured_places_item">
                        <div class="featured_places_overlay">
                          <div class="row">
                            <div class="col-md-7">
                              <p class="ftr_places_title">UENO</p>
                            </div>
                            <div class="col-md-2">
                              <p class="ftr_places_title">221</p>
                            </div>
                            <div class="col-md-2">
                              <p class="ftr_places_title">50</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 right_feature_place" style=" padding-right: 0px;padding-left: 24px;">
                    <div class="featured_places shibuya">
                      <div class="featured_places_item">
                        <div class="featured_places_overlay">
                          <div class="row">
                            <div class="col-md-7">
                              <p class="ftr_places_title">SHIBUYA</p>
                            </div>
                            <div class="col-md-2">
                              <p class="ftr_places_title">221</p>
                            </div>
                            <div class="col-md-2">
                              <p class="ftr_places_title">50</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['restaurants']
  }
</script>

<style>

</style>