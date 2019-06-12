<template>
  <div class="container-fluid">
    <vue-headful
            title="Notifications | TRAV CP"
            description="Description from TRAV CP"
        />
    <Navbar/>
    <!--About us start -->
    <div class="notification-header">
      <p>Notifications</p>
      <hr>
    </div>
    <div class="container notification-main">
      <div class="notification-view">
        <!-- one -->
        <div style="text-align: center;" v-if="loading">
          <Circle9 />           
        </div>
        <div v-if="notifications.length < 1 && !loading">
          <empty-result>
            <template v-slot:error-header>Errm</template>
            You do not have any notifications yet. <br> When you book an experience, it will appear here.
          </empty-result>
        </div>
        <div class="row notification-view-row" v-for="notification in notifications">
          <div class="col-md-1 notification-image-view">
            <div class="notification-image"></div>
          </div>
          <div class="col-md-9 notification-message-view">
            <p class="notification-messenger">
              <span class="notification-messenger-text1">KIA restaurant</span> messaged you
            </p>
            <p
              class="notification-message"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus blanditiis corporis vitae architecto, quas iste alias delectus earum optio molestiae perferendis, deleniti atque ducimus? Vitae asperiores nemo maxime amet magni?</p>
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
import EmptyResult from "@/components/EmptyResult.vue";
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import Footer from '@/components/Footer.vue';
import { Circle9 } from 'vue-loading-spinner'
// import EmptyResult from "@/components/EmptyResult.vue";
// import { Circle9 } from 'vue-loading-spinner'


export default {
  name: "Notifications",
  beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem('auth'))
      if(checkToken.access_token) {
          return next()
      } else {
        // this.$noty.error("Sign in to access!")
        return next({ path: '/signin' })
      }
      next();
  },
  components: {
    Navbar, EmptyResult, Circle9
  },
  data(){return{
    loading: false,
    notifications: [],
  }},
  methods: {
    getMyNotifications(){
      this.loading = true;
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
      };
      axios.get(`${this.$store.state.API_BASE}/notifications`, requestHeaders).then(response => {
        this.notifications = response.data.data;
        this.loading = false;
      }).catch(err => {
        this.$noty.error("Oops, There was an error Trying to get notifications, Please reload the page");
        this.loading = false;
      })
      
    }
  },
  created(){
    this.getMyNotifications()
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
  width: 70%;
}
.notification-image-view {
  padding-top: 10px;
}
.notification-image {
  background: url("../assets/profile_1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 55px;
  width: 55px;
}
.notification-message-view {
  padding-left: 20px;
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
  width: 900px;
}
</style>