<template>
  <div class="container">
    <vue-headful
            title="Careers | TravCP"
            description="Description from TravCP"
        />
    <Navbar/>

<div class="wrapper">
    <div class="page-header page-header-small">
      <!-- <img src="../assets/landing_images/background_2.jpg" alt="Landing" srcset=""> -->
      <div class="page-header-image" data-parallax="true">
      </div>
      <div class="content-center">
        <div class="container">
          <h1 class="title" style="color: #FFF;">Careers at TravCP</h1>
          <div class="row"> 
            <div class="col-md-12"> 
              <form>
                  <div class="row">
                    <div class="col-md-9">
                      <input type="text" class="main-input main-name" style="width: 100%;" name="NAME"  placeholder="Search..." />
                    </div>
                    <div class="col-md-3">
                      <input id="main-submit" style="width: 100%;" class="" type="submit" value="Search" />
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">At <span style="color: #f81894; font-weight: 900"> TravCP </span> Our Vision is to Model Africa to be the number one tourist  destination in the world.</h5>
            <h5 class="description">Our entire team and operations is dedicated to showcasing the best of Africa to the world, by promoting tourist destinations, and travel businesses</h5>
            <h2 class="title">Our Core Values</h2>
            <h5 class="description"><span style="color: #f81894; font-weight: 900"> Creatively Hungry: </span>We ask questions, we dream big, we take actions, we collaborate, we
grow.</h5>
            <h5 class="description"><span style="color: #f81894; font-weight: 900"> Impact Driven: </span>We are focused on making a global impact that spans from Africa.
</h5>
            <h5 class="description"><span style="color: #f81894; font-weight: 900"> Excellence Driven: </span>We take ownership of our work, we strive for the best and push ourselves outside our comfort zone.</h5>
            <h5 class="description"><span style="color: #f81894; font-weight: 900"> Accountable: </span>We look after one another, we encourage one another. We have integrity. We respect one another</h5>
          </div>
        </div> 
      </div>
    </div> 
    <div class="row">
        <div class="col-md-12">
          <div id="carouselExampleCaptions" class="carousel slide w-100" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <!-- <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                  <h1>Creatively hungry</h1>
                  <h5>We ask questions, we dream big, wetake actions, we grow.</h5>
                  <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <!-- <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                  <h1>Impact driven</h1>
                  <h5>We are focused on making a global impact that spans from Africa.</h5>
                  <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <!-- <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                  <h1>Driven</h1>
                  <h5>We take ownership of our work and push ourselves outside our comfort zone.</h5>
                  <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <!-- <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                  <h1>Accountable</h1>
                  <h5>We look after one another. We encourage one another. We respect one another.</h5>
                  <img src="https://i.pinimg.com/originals/e1/d0/83/e1d0836071b1ed7bdab080f25b825c5e.jpg"  alt="...">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" style="right: 0px;font-size: 40px;bottom: 30px;left: 20px;top: auto;width: 40px;">
              <img src="../../assets/Icons/core-value-arrow-right.svg" style="transform: rotate(180deg);">
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" style="right: 0px;bottom: 30px;left: 60px;top: auto;font-size: 40px;    width: 40px;">
              <img src="../../assets/Icons/core-value-arrow.svg">
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form> 
          <div class="row">
            <div class="col-md-6 form-group"> 
              <label for="firstname">First Name <span>*</span> </label>
              <input type="text" class="form-control form-control-lg" id="firstname">
            </div>  
            <div class="col-md-6 form-group"> 
              <label for="lastname">Last Name <span>*</span> </label>
              <input type="text" class="form-control form-control-lg" id="lastname">
            </div>  
            <div class="col-md-6 form-group"> 
              <label for="email">Email <span>*</span> </label>
              <input type="text" class="form-control form-control-lg" id="email">
            </div>   
            <div class="col-md-6 form-group"> 
              <label for="phonenumber">Phone Number <span>*</span> </label>
              <input type="text" class="form-control form-control-lg" id="phonenumber">
            </div>    
            <div class="col-md-6 form-group"> 
              <label for="aoi">Area of Interest <span>*</span> </label>
              <select class="form-control form-control-lg">
                <option>
                  Marketing
                </option>
                <option>
                  Engineering
                </option>
                <option>
                  Finance
                </option>
                <option>
                  Creatives
                </option>
                <option>
                  Business Development & Support
                </option>
                <option>
                  Design & User Experience
                </option>
                <option>
                  Talent Manager
                </option>
                <option>
                  Data analyst
                </option>
                <option>
                  Customer Service
                </option>
                <option>
                  Legal
                </option>                                                                                                                                                                                                
              </select>
            </div> 
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <button style="color: #ffffff;background: none;background-color: #00acf0;border-color: #00acf0;box-shadow: none;width: 180px;">
                  Submit
                </button>
              </div>
          </div>
        </form>
        <br>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Careers",
  components: {
    Navbar
  },
  mounted() { 
  }
};
</script>
<style scoped>
form {
  margin-top: 40px;
}
.form-group input, .form-group select {
  height: 46px;
  border: 1px solid #d8d8d8;
  font-size: 18px;
  color: #515151;
  border-radius: 0px;
}
.form-group input:focus, .form-group select:focus {
  border: 1px solid #000;
}
.form-group label {
  margin-bottom: 30px;
}
.form-group label span {
  color: red; 
}
.carousel-caption img {
  max-height: 0; 
  max-width: 0; 
  margin-bottom: 0; 
  margin-top: 0; 
  display: inline;
  position: relative;
  top: -80px;
  left: 0; 
  right: auto;
  float: right;
}
.carousel .carousel-inner {
  box-shadow: none !important;
}
.carousel-indicators {
  display: none;
}
.carousel-caption {
    color: #000;
}
.carousel-control-next, .carousel-control-prev {
  width: auto;
}
.carousel-item {
  min-height: 350px;
}
.carousel {
  display: inline-block;
}
.carousel-item > img {
  width: 100%;
  height: 350px !important;
}


.carousel-caption {
  top: 5%;
}

.carousel-caption img {
    max-height: 250px;
    max-width: 250px; 
    margin-bottom: 30px;
    margin-top: 30px;
}


 @media (max-width: 768px) {
     
/*    .text-xs-center {
              text-align: center;
     } 
     */
   
    }



.carousel-caption {
  text-align: left;
}

.overlay {
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  left:0;
  top:0;
  bottom: 0;
  right: 0;
  
  
}



.details .detail:not(:last-child) {
  border-right: 1px solid #999;
}



.details  i {
  font-size: 27px; 
  
}
.carousel-control-next {
   right: 0px;
    bottom: 30px;
    left: auto;
    top: auto;
    font-size: 40px;
}
.carousel-control-prev {
    right: 50px;
    font-size: 40px;
    bottom: 30px;
    left: auto;
    top: auto;
}


@media screen and (min-width: 768px) {

  .position-md-right {
    position: absolute;
    left: 50%;
  }

  .carousel-caption {
  top: 20%;
  }

   
  .position-md-right img {
  width: 1000px;

  }

  .carousel-item > img {
  height: 40vh;
  background-color: #fff;
  }
}

@media screen and (max-width:768px)  {
   
.carousel-caption img {
  max-width: 190px;

}
  
}

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
.navbar{
  box-shadow: none !important;
}
.btn-primary {
    background-color: rgb(248, 24, 148) !important;
    color: #FFFFFF !important;
}

.page-header-image {
    background: url('../../assets/landing_images/room-l9QPabiKKhw-unsplash.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left {
    background: url('../../assets/landing_images/background_4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-right {
    background: url('../../assets/landing_images/background_3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.image-left-2 {
    background: url('../../assets/landing_images/background_1.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 10px;
}
.section-story-overview .image-container {
  margin-left: 0;
}
.team-player img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: -60px;
}

.centerbox {position: absolute;top:50%;left:50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%); /* IE 9 */
-webkit-transform: translate(-50%, -50%); /* Chrome, Safari, Opera */
width:620px;min-height:52px;z-index:2}
.centerbox h1 {margin-bottom: 25px;font-size:36px;font-family: "Webly Sleek SemiLight";font-weight: normal;text-align: center;}
.centerbox p.description {margin-bottom:40px;text-align: center;}
.description a {text-decoration:none;}
.main-input { background: #fff; height: 50px; width: 327px;color: #a7b1ab; border: 1px solid #cccccc; margin-bottom: 0px; -webkit-appearance: none; border-radius: 4px 0px 0px 4px; -moz-border-radius: 4px 0px 0px 4px; -webkit-border-radius: 4px 0px 0px 4px;display: inline-block;text-align: left;font-size: 16px; font-weight: 500; padding:0px 0px 0px 57px;font-size:16px;border-right:0px;background: #ffffff  18px 15px no-repeat;background-size:18px 18px;float:left;}
.main-location {display: none;}
#main-submit { background: rgb(248, 24, 148);color: #fff; display: inline-block; font-size: 19px; font-weight: 500;text-align: center; cursor: pointer;margin-bottom: 0px; -webkit-appearance: none;
border-radius: 0px 4px 4px 0px; -moz-border-radius: 0px 4px 4px 0px; -webkit-border-radius: 0px 4px 4px 0px;width:141px;height:50px;border: 0px;padding-top:0px;float:left;}
#main-submit:hover { background: rgb(248, 24, 148); color: #fff !important; -webkit-appearance: none; }
#main-submit-mobile {display: none;}
footer { border-top: 0px;}
.main-btn {display: inline-block;width:150px;height:50px;border: 1px solid #cccccc;padding:0px;position: relative;float:left;border-right:0px;background: #ffffff  122px 23px no-repeat;background-size:6px 6px;cursor: pointer;}
.search-small {font-size:12px;margin:0px;color:#9B9B9B;position: absolute;top: 6px;left:16px;display: inline-block;width:80px;height:20px;text-align:left;}
.search-large {font-size:16px;margin:0px;color:#4A4A4A;position: absolute;top: 19px;left:16px;display: inline-block;width:105px;height:20px;font-weight:900;text-align:left;}
.main-form-container {height:50px;position: relative;}
ul.search-description {width:150px;position: absolute; background: #fff;right:143px;top:55px;
border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px;padding:14px 0px;border: 1px solid #E5E5E5;display: none;
-webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);
box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);
}
.search-description li {font-size:16px;color:#4A4A4A;font-weight:900;padding:6px 0px;display:block;padding-left:16px;cursor: pointer;}
.search-description li:hover {background:#f8f8f8;}












/* responsive css below */
@media only screen and (max-width: 680px) {
    .main-btn {border-radius: 0px 4px 4px 0px; -moz-border-radius: 0px 4px 4px 0px; -webkit-border-radius: 0px 4px 4px 0px;border-right:1px solid #cccccc;}
    ul.search-description {right:0px;z-index:9999;}
    .centerbox p.description {width:284px;margin:0 auto 40px auto;}
    .centerbox {width:auto;transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%); /* IE 9 */
    -webkit-transform: translate(-50%, -60%); /* Chrome, Safari, Opera */
    }
    .main-form-container {width:477px}
    #main-submit {display: none;}
    #main-submit-mobile { background: #3cb13c;color: #fff; display:block; font-size: 19px; font-weight: 500;text-align: center; cursor: pointer;margin-bottom: 0px; -webkit-appearance: none;border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px;width:141px;height:50px;border: 0px;padding-top:0px;float:none;border:0px;position: fixed;bottom: 0px;right:0px;width: 100%;z-index:1;}
    #main-submit-mobile:hover { background: #00a221; color: #fff !important; -webkit-appearance: none; }
    footer {padding-bottom:50px;}
}

@media only screen and (max-width: 515px) {
    .main-input {width:210px;}
    .main-form-container {width:360px}
    .centerbox h1 {width:280px;margin:0 auto 15px auto;}
    .centerbox {position: absolute;top:50%;left:50%;
    }
}

@media only screen and (max-width: 375px) {
    .cover {background: rgba(0, 0, 0, 0)  no-repeat center -175px;}
    .main-input {width: 185px;padding-left:42px;background: #ffffff  12px 15px no-repeat;background-size:18px 18px;}
    .main-btn {width:108px;background: #ffffff  85px 23px no-repeat;background-size:6px 6px;}
    .main-form-container {width:293px}
    .search-small {left:13px;}
    .search-large {left:13px;}
}
</style>
<style scoped src='../../assets/css/demo.css'>
</style>
<style scoped src='../../assets/css/now-ui-kit.css'>
</style>
