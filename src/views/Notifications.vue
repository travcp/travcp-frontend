<template>
  <div class="container-fluid">
    <Navbar/>
    <!--About us start -->
    <div class="notification-header">
      <p>Notifications</p>
      <hr>
    </div>
    <div class="container notification-main">
      <div class="notification-view">
        <!-- one -->
        <div class="row notification-view-row">
          <div class="col-md-2 notification-image-view">
            <div class="notification-image"></div>
          </div>
          <div class="col-md-7 notification-message-view">
            <p class="notification-messenger">
              <span class="notification-messenger-text1">KIA restaurant</span> messaged you
            </p>
            <p class="notification-message">How do you like your suchi?</p>
            <p class="notification-time">2 days ago</p>
          </div>
          <hr class="rule">
        </div>
        <!--two -->
        <div class="row notification-view-row">
          <div class="col-md-2 notification-image-view">
            <div class="notification-image"></div>
          </div>
          <div class="col-md-7 notification-message-view">
            <p class="notification-messenger">
              <span class="notification-messenger-text1">KIA restaurant</span> messaged you
            </p>
            <p class="notification-message">How do you like your suchi?</p>
            <p class="notification-time">2 days ago</p>
          </div>
          <hr class="rule">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Notifications",
  components: {
    Navbar
  }
};
</script>
<style scoped>
.notification-main {
  padding-top: 3%;
}
.notification-header {
  padding-top: 5%;
}
.notificatioin-view-row {
}
.notification-header p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
  text-align: center;
}
.notification-header hr {
  width: 200px;
}
.notification-view {
  margin: auto;
  width: 40%;
}
.notification-image-view {
}
.notification-image {
  background: url("../assets/profile_1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 70px;
  width: 70px;
}
.notification-message-view {
  padding-left: 30px;
}
.notification-messenger {
  font-size: 16px;
}
.notification-messenger-text1 {
  font-weight: bolder;
}
.notification-message {
  font-size: 14px;
}
.notification-time {
  color: rgb(186, 179, 179);
}
.rule {
  width: 500px;
}
</style>