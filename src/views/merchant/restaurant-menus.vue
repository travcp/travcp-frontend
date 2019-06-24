<template>
    <div class="restaurant-menu">
        <Navbar />
        <div class="row">
            <div class="col-md-12">
                <div class="restaurant_heading">
                    <h1>{{ restaurant.title }} - {{ restaurant.state }}</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-md-12">
                            <div class="">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="container">
                                            <h3>Add Menu</h3>
                                            <hr><br>
                                            <form @submit.prevent="addNewMenu">
                                                <div class="row">
                                                <!-- <div class="col-md-12"> -->
                                                    <div class="form-group col-md-12">
                                                        <label
                                                          >Food Category</label
                                                        >
                                                        <select
                                                          v-validate="'required'"
                                                          class="form-control new_experience_input"
                                                          v-model="food_category" 
                                                        >
                                                          <!-- <option selected>Select</option> -->
                                                          <option
                                                            v-for="categorie in categories" v-if="categorie" :value="categorie.id">{{ categorie.name }}</option
                                                          >
                                                        </select>
                                                      </div>
                                                    <div class="form-group col-md-12">
                                                        <label
                                                          >Name of Menu</label
                                                        >
                                                        <input
                                                          v-validate="'required'"
                                                          cols="30"
                                                          rows="10"
                                                          class="form-control new_experience_input"
                                                          v-model="description"
                                                        />
                                                      </div>
                                                    <div class="form-group col-md-12">
                                                        <label
                                                          >Price $</label
                                                        >
                                                        <input
                                                              v-validate="'required|numeric'"
                                                              type="number"
                                                              step="any"
                                                              class="form-control new_experience_input"
                                                              placeholder="Price"
                                                              v-model="price"
                                                            />
                                                      </div>
                                                    <div class="form-group col-md-6">
                                                       <button type="submit" class="btn btn-lg submitRestaurant" :disabled="loading.addMenu">
                                                            <span v-if="loading.addMenu">
                                                              <img
                                                                style="height: 20px;"
                                                                src="../../assets/loader_rolling.gif"
                                                              />
                                                            </span>
                                                            <span v-else>
                                                              Submit
                                                            </span>
                                                       </button>
                                                      </div>
                                                <!-- </div> -->
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="container">
                    <div class="card" style="width: 100%;">
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item" v-for="menu in menus">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>{{ menu.description }}</h6> <br>
                                        <!-- <input type="text" :value="menu.description"  /> -->
                                        <!-- <p>Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text</p> <br> -->
                                        <p>
                                          <button type="button" style="width: 120px;" class="btn btn-danger" @click="deleteMenu(menu.id)" :disabled="loading.deleteMenu">
                                            <span v-if="loading.deleteMenu">
                                                <img
                                                  style="height: 20px;"
                                                  src="../../assets/loader_rolling.gif"
                                                />
                                              </span>
                                              <span v-else>
                                                Delete
                                              </span>
                                        </button>
                                      </p>
                                    </div>
                                    <div class="col-md-6" style="text-align: right;">
                                        <p>$ {{ menu.price }} </p>
                                    </div>
                                </div>
                              </li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import { mapState } from 'vuex';
    export default {
        name: "RestaurantMenus",
        beforeRouteEnter(to, from, next) {
            let checkToken = JSON.parse(localStorage.getItem('auth'))
              if(checkToken.access_token && checkToken.user.role == 'merchant') {
                  return next()
              } else {
                // this.$noty.error("Sign in to access!")
                return next({ path: '/signin' })
              }
              next();
          },
        data(){
            return {
                menus: [],
                categories: [],
                food_category: null,
                description: null,
                price: null,
                loading: false,
                restaurant: {}
            }
        },
        components: {
            Navbar
        },
        // props: ['id', 'name'],
        methods: {
            getMenus(){
                axios.get(`${this.$store.state.API_BASE}/restaurants/${this.$route.params.id}/menus`).then(res => {
                    this.menus = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getCategories() {
              axios.get(`${this.$store.state.API_BASE}/food_classifications`).then(res => {
                    this.categories = res.data;
                    console.log(res.data)
                }).catch(err => {
                    console.log(err);
                })  
            },
            deleteMenu(menu_id){
              // this.$validator.validateAll().then(result => {
              //       if (result) {
                      
                      let requestHeaders = {
                        headers: { 
                          'Authorization': "Bearer " + this.$store.state.auth.access_token
                         }
                      }
                      this.$store.state.loading.deleteMenu = true;
                      axios
                        .delete(`${this.$store.state.API_BASE}/food/menus/${menu_id}`, requestHeaders)
                        .then(response => {
                          console.log(response.data.data)
                          this.$store.state.loading.deleteMenu = false;
                          this.getMenus();
                        })
                        .catch(err => {
                          console.log(err);
                          // reject(err);
                          console.log(err)
                          this.$noty.error("Oops, something went wrong!");
                          return this.$store.state.loading.deleteMenu = false;
                        });

                  //   } else {
                  //     this.$noty.error("Oops, something went wrong!");
                  //   }
                  // });
            },
            addNewMenu() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                      
                      let requestHeaders = {
                        headers: { 
                          'Authorization': "Bearer " + this.$store.state.auth.access_token
                         }
                      }
                      let data = {
                        restaurant_id: this.$route.params.id,
                        category_id: this.food_category,
                        description: this.description,
                        price: this.price
                      }

                      this.$store.state.loading.addMenu = true;
                      axios
                        .post(`${this.$store.state.API_BASE}/food/menus`, data, requestHeaders)
                        .then(response => {
                          // resolve(response.data.data);
                          // return console.log(response.data.data);
                          this.$store.state.loading.addMenu = false;
                          
                          this.food_category = ''
                          this.description = ''
                          this.price = ''
                          this.getMenus();

                          this.$noty.success("Menu created Succesfully");
                        })
                        .catch(err => {
                          console.log(err);
                          // reject(err);
                          console.log(err)
                          this.$noty.error("Oops, something went wrong!");
                            
                          return this.$store.state.loading.addMenu = false;
                        });

                    } else {
                      this.$noty.error("Oops, something went wrong!");
                    }
                  });
            },
            async getRestaurantById(){
                await axios.get(`${this.$store.state.API_BASE}/experiences/${this.$route.params.id}`).then(response => {
                    this.restaurant = response.data.data
                    console.log(response.data.data)
                });
            },
        },
        computed: {
          // ...mapState(['loading'])
        },
        created(){
            this.getRestaurantById()
            this.getMenus();
            this.getCategories();
        }
    }
</script>

<style scoped>
.restaurant_heading {
        height: 150px;
        width: 100%;
        margin-top: 10px;
        text-align: center;
        padding: 50px;
        background: url('../../assets/shibuya.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 20px;
    }
    .restaurant_heading h1 {
        font-weight: bolder;
        color: #FFF;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        background-color: #f81894;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
        color: #FFF!important;
    }
    .list-group-item {
        padding: 30px;
        color: #6b6666;
        text-transform: capitalize;
        font-family: MuseoSans500;
    }
    li.list-group-item h6 {
        font-weight: bolder;
        color: #606163;
        font-size: 18px;
    }
    .submitRestaurant {
        background-color: #f81894;
        color: #FFF;
    }
</style>