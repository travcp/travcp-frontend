<template>
  <div class="container main">
    <vue-headful
            title="My Cart | TRAV CP"
            description="Description from TRAV CP"
        />
    <Navbar/>
    <!-- booking header details left -->
    <div class="row my-booking-head">
      <div class="col-lg-8 my-booking-header">
        <div class="my-booking-title">
          <p>My Cart</p>
          <hr class="my-booking-title-horizontal">
        </div>
        <div style="padding-bottom: 20px">
          <p class="my-cart-sub-title">Cart( {{ cart.items.length > 1 ? cart.items.length : '' }} )</p>
          <p class="my-cart-sub-title">Price - ${{ calcPrice() }}</p>
        </div>
        <div class="row my-booking-left" v-for="item in cart.items" :key="item.id">
          <div class="col-md-3 my-booking-details-image"></div>
          <div class="col-md-6 my-booking-trip-main">
            <div class="my-booking-trip-main-head">
              <div class="my-booking-trip-details-header">
                <p class="my-booking-trip-details-header-p1">{{ item.booking.experience.title }} | WEST SUNNYBERG</p>
                <p class="my-booking-trip-details-header-p2">{{ item.booking.experience.city }}</p>
              </div>
              <div class="my-booking-trip-details">
                <p
                  class="my-booking-trip-details-p1"
                >{{ item.booking.experience.description }}</p>
              </div>
            </div>
          </div>
          <div
            style="display: flex; flex-direction: row; justify-content: space-evenly; padding-top: 70px; padding-left: 20px">
            <a href="#">
              <!-- <p class="col-md-2 my-cart-delete-image"></p> -->
            </a>
            <button class="btn" style="background: #f81894;color #FFF;height: 40px;">
              <p class="col-md-2" style="font-size: 17px; font-weight: bold;" @click="removeFromCart(item.id)"><i class="fa fa-bin"></i>REMOVE</p>
            </button>
          </div>
        </div>
        <div style="text-align: center;" v-if="loading">
          <Circle9 />
        </div>
        <div v-if="cart.length < 1 && !loading">
          <empty-result>
            <template v-slot:error-header>Errm</template>
            You do not have any carts yet. <br> When you book an experience, it will appear here.
          </empty-result>
        </div>
      
        <div class="my-cart-button">
          <button class="button button1">Explore</button>
          <form >
            <button type="button" class="button button2" @click="payWithPaystack()"> Checkout </button> 
          </form>
          <!-- <button class="">Checkout</button> -->
        </div>
      </div>
      <!-- booking header details right -->
      <div class="col-lg-4">
        <div class="my-booking-details-right">
          <div class="feature-places-title">
            <p class="feature-places-title-p1">Featured Places</p>
            <p class="feature-places-title-p2"><router-link to="/places">SEE ALL</router-link></p>
          </div>
          <div>

            <div class="featured_places saitama changed" v-for="place in places.slice(0, 3)" >
              <router-link :to="'/experience/'+ place.id + '/' + place.title">
                <div class="featured_places_item">
                  <div class="featured_places_overlay overlay-changed">
                    <div class="row">
                      <div class="col-sm-7 col-md-7">
                        <p class="ftr_places_title">{{ place.city }}</p>
                      </div>
                      <div class="col-sm-2 col-md-2">
                        <p class="ftr_places_title">{{ place.number_admittable }}</p>
                      </div>
                      <div class="col-sm-2 col-md-2">
                        <p class="ftr_places_title">{{ place.rating_count }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import EmptyResult from "@/components/EmptyResult.vue";
import { mapActions, mapState } from "vuex";
import axios from "axios";
import Footer from "@/components/Footer.vue";
import { Circle9 } from 'vue-loading-spinner'
// import EmptyResult from "@/components/EmptyResult.vue";

export default {
  name: "MyCart",
  beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem('auth'))
      if(checkToken && checkToken.access_token) {
          return next()
      } else {
        // this.$noty.error("Sign in to access!")
        return next({ path: '/signin' })
      }
      next();
  },
  data() {
    return {
      loading: false,
      cart: [],
      no_cart_items: null,
      paystack_response: null,
      price: 0
    }
  },
  components: {
    Navbar,
    EmptyResult,
    Footer,
    Circle9
  },
  computed: {
    ...mapState(['places']),
    getNoCarts() {
      return true
    }
  },
  methods: {
    calcPrice(){
      let price = 0;
      if(this.cart.length > 1) {
        console.log("cart items", this.cart.items)
        for(let i = 0; i < this.cart.items.length; i++){
          price += this.cart.items[i].booking.experience.dollar_price
          console.log("booking price", this.cart.items[i].booking.experience.dollar_price);
          // for(let i = 1; i <= this.cart.items; i++){
          //   // price += this.cart[i].items.booking.dollar_price
            
          // }  
        }
        // this.cart.items.forEach(item => {
        //   price += item.booking.price
        // });
        return price;  
      }
      else{
        console.log("cart items is false")
      }
      // return 0;
    },
    getMyCarts(){
      this.loading = true;
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
      }
      axios.get(`${this.$store.state.API_BASE}/users/${this.$store.state.auth.user.id}/cart`, requestHeaders).then(response => {
        this.cart = response.data.data;
        console.log(this.cart)
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        if (err.response.status == 404) {
          console.log(err.response.data)
          return this.cart = []
        }
        this.$noty.error("Oops, there was error getting carts");
      })

    },
    removeFromCart(item_id) {
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token }
      };
      axios.delete(`${this.$store.state.API_BASE}/cart_items/${item_id}`, requestHeaders).then(response => {
                console.log(response.data)
                this.getMyCarts()
                // this.loading = false;
              }).catch(err => {
                this.$noty.error("Oops, there was error getting carts");
              })
    },
    payWithPaystack(){
    var _this = this
    console.log("price is " + this.calcPrice());
    var handler = PaystackPop.setup({
      key: 'pk_test_a3c6507e7a82c63308de9c5863bbe0950492d508',
      email: this.$store.state.auth.user.email,
      amount: this.calcPrice(),
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          _this.checkOut(response.reference);
          _this.paystack_response = response.reference
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  },
  checkOut(reference){
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token }
      };
      console.log('Got Here');

      // let trasc_id = this.paystack_response.toString();
      console.log(reference)
      axios.post(`${this.$store.state.API_BASE}/cart/checkout`, {
                    "transaction_id": reference,
                    "price": this.calcPrice,
                    "cart_id": this.cart.id
                  },requestHeaders).then(response => {
                    console.log(response.data)
                    this.$noty.success("Payment Successfull")
                    this.getMyCarts()
                    // this.loading = false;
                  }).catch(err => {
                    console.log(err)
                    this.$noty.error("Oops, there was error getting carts");
                  })

  }
  },
  created() {
    this.getMyCarts();
    // console.log(this.items)
  }
};
</script>
<style scoped>
.main {
  /*padding-top: 100px;*/
}
.my-cart-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
}
.button {
  width: 150px;
  height: 30px;
  border-radius: 20px;
  background-color: pink;
  outline: none;
}
.button1 {
  color: #f81894;
  background-color: #fff;
  height: 40px;
  border: 2px solid #eee;
  /*box-shadow: 2px 1px 1px grey;*/
}
.button2 {
  color: #fff;
  background-color: #f81894;
  height: 40px;
  /*box-shadow: 2px 1px 1px grey;*/
  border: 2px solid #eee;
  margin-left: 30px;
}
.my-booking-head {
  margin-top: 20px;
}
.my-booking-left {
  padding-left: 16px;
  margin-bottom: 40px;
}
.my-booking-trip-main {
  padding-left: 15px;
}
.my-booking-trip-main-head {
  padding-top: 2px;
}
.my-booking-trip-details-header {
}

.my-cart-sub-title {
  font-size: 20px;
  font-weight: bolder;
  color: #f81894;
}
.my-cart-delete-image {
  background: url("../assets/logo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30px;
}
.my-booking-trip-details-header-p1 {
  font-size: 12px;
  font-weight: 1000;
  font-stretch: expanded;
}
.my-booking-trip-details-header-p2 {
  color: #f81894;
  font-size: 20px;
  font-weight: bold;
}
.my-booking-trip-details {
}
.my-booking-trip-details-p1 {
  font-size: 14px;
  font-weight: bold;
}
.my-booking-trip-details-p2 {
  color: grey;
  font-size: 13px;
}

.my-booking-details-image {
  background: url("../assets/nagoya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.my-booking-header {
  padding: 20px;
}
.my-booking-details-right {
  /*margin-left: 55%;*/
}
.changed {
  height: 200px;
  width: 190px;
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
  margin-left: 50px;
  margin-right: 50px;
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
  height: 30px;
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
</style>

