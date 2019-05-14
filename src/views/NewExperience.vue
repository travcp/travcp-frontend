<template>
	<div>
		<Navbar />
		<div class="new_experience">
			<div class="new_experience_title" style="text-align: center;">
	          <p>Add New</p>
	          <hr class="new_experience_title_horizontal">
	        </div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="card" style="width: 100%;border: none;">
						  <div class="card-body">
				    		<form  @submit.prevent="formSubmit">
							    <div class="row">
							    	<div class="col-md-3"></div>
							    	<div class="col-md-6">
							    			<div class="form-holder">
							    				<div class="form-index-1" v-if="form_index == 1">
							    					
							    					<div class="form-group col-md-12">
							    						<label for="">Select Experience Type</label>
								    					<select  v-validate="'required'" id="inputState" class="form-control new_experience_input" v-model="experience_type">
													        <!-- <option selected>Select</option> -->
													        <option v-for="experience_type in experience_types">{{ experience_type.name }}</option>
													    </select>
							    					</div>
							    					<div class="form-group col-md-12">
								    					<select id="inputState" class="form-control new_experience_input">
													        <!-- <option selected>Select</option> -->
													        <option v-for="experience_type in experience_types">{{ experience_type.name }}</option>
													    </select>
							    					</div>
							    					<div class="form-group col-md-12">
															  <label class="">City</label>
															  <input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="City" v-model="city">
							    					</div>
							    					<div class="form-group col-md-12">
															<label for="">Language</label>
															<select v-validate="'required'" id="inputState" class="form-control new_experience_input" v-model="language">
														        <!-- <option selected>Select</option> -->
														        <option>English</option>
														      </select>
							    					</div>
							    					<div class="form-group col-md-12">
							    						<div class="row">
							    							<div class="col-md-6"></div>
							    							<div class="col-md-6" style="text-align: right;">
								    							<button type="button" class="btn btn-lg submit_exp_btn" @click="inFormIndx">Next</button>
							    							</div>
							    						</div>
							    					</div>
							    				</div>
							    				<div class="form-index-2" v-if="form_index == 2">
							    					
							    					<div class="form-group col-md-12">
								    					<label for="">About the experience designer</label>
														<textarea v-validate="'required'" cols="30" rows="10" class="form-control" v-model="about_the_experiece_designer"></textarea>
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label class="">Offerings on tour ( drinks, snacks, etc)</label>
													  	<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="Offerings on tour ( drinks, snacks, etc)" v-model="offerings_on_tour">
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label for="">Short descriptions of the experience</label>
														<textarea v-validate="'required'" cols="30" rows="10" class="form-control submit-exp-textarea" v-model="short_description_of_the_experience"></textarea>
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label class="">Price in Naira, Dollars and Pounds</label>
																  <input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="$200,000" v-model="price_in_naira">
							    					</div>
							    					<!-- <div class="form-group col-md-12">
								    					<label for="">Pictures</label>
														<input type="file" class="form-control" name="" multiple="true">
							    					</div> -->
							    					<div class="form-group col-md-12">
							    						<div class="row">
							    							<div class="col-md-6" style="text-align: left;">
							    								<button type="button" class="btn btn-lg submit_exp_btn  prev_btn" @click="deFormIndx">< Back</button>
							    							</div>
							    							<div class="col-md-6" style="text-align: right;">
							    								<button type="button" class="btn btn-lg submit_exp_btn" @click="inFormIndx">Next</button>
							    							</div>
							    						</div>
							    					</div>
							    				</div>
							    				<div class="form-index-3" v-if="form_index == 3">
							    					
							    					<div class="form-group col-md-12">
								    					<label class="">Where they would meet up with clients with map</label>
																  <input v-validate="'required'" type="text" class="form-control new_experience_input" v-model="meet_up" placeholder="Where they would meet up with clients with map">
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label class="">What tourists should bring along</label>
																  <input v-validate="'required'" type="text" class="form-control new_experience_input" v-model="what_tourists_should_bring_along" placeholder="What tourists should bring along">
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label class="">Itinerary for the experience</label>
																  <input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="Itinerary for the experience" v-model="itinerary_for_the_experience">
							    					</div>
							    					<div class="form-group col-md-12">
								    					<label class="">Number that each tour can admit</label>
																  <input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="Number that each tour can admit" v-model="number_that_each_tour_can_admit">
							    					</div>
							    					<div class="form-group col-md-12">
							    						<div class="row">
							    							<div class="col-md-6" style="text-align: left;">
							    								<button v-validate="'required'" type="button" class="btn btn-lg submit_exp_btn  prev_btn" @click="deFormIndx">< Back</button>
							    							</div>
							    							<div class="col-md-6" style="text-align: right;">
								    							<button type="submit" class="btn btn-lg submit_exp_btn" >Submit</button>						    		
							    							</div>
							    						</div>
							    						
							    					</div>
							    				</div>

							    			</div>
							    	</div>
							    	<div class="col-md-3" v-if="form_index == 1">
							    		<h5>Uploaded Image</h5> <br>
										<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
				    					<!-- <div class="uploaded_image">
				    						
				    					</div> -->
							    	</div>
							    </div>
				    		</form>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script>
	import vue2Dropzone from 'vue2-dropzone'
	import 'vue2-dropzone/dist/vue2Dropzone.min.css'
	import Navbar from '@/components/Navbar.vue';
	import Footer from '@/components/Footer.vue';
	import { mapActions, mapState } from 'vuex';

	export default {
		name: 'NewExperience',
		beforeRouteEnter(to, from, next) {
            if(localStorage.getItem('auth')) {
                return next()
            } else {
            	// this.$noty.error("Sign in to access!")
            	return next({ path: '/signin' })
            }
            next();
        },
		data(){return{
			form_index: 1,
			experience_type: null,
			city: null,
			language: null,
			about_the_experiece_designer: null,
			offerings_on_tour: null,
			short_description_of_the_experience : null,
			price_in_naira: null,
			meet_up: null,
			what_tourists_should_bring_along: null,
			itinerary_for_the_experience: null,
			number_that_each_tour_can_admit: null,
			dropzoneOptions: {
	          url: 'https://httpbin.org/post',
	          thumbnailWidth: 150,
	          maxFilesize: 0.5,
	          headers: { "My-Awesome-Header": "header value" }
	      	}
		}},
		components: {
			Navbar, 
			Footer,
			vueDropzone: vue2Dropzone
		},
		methods: {
			...mapActions(['getExperienceTypes']),
			...mapActions(['submitExperience']),
			inFormIndx(){
				this.form_index++;
			},
			deFormIndx(){
				this.form_index--;
			},
			formSubmit() {
				let data = {
					experience_type: this.experience_type,
					city: this.city,
					language: this.language,
					about_the_experiece_designer: this.about_the_experiece_designer,
					offerings_on_tour: this.offerings_on_tour,
					short_description_of_the_experience: this.short_description_of_the_experience,
					price_in_naira: this.price_in_naira,
					meet_up: this.meet_up,
					what_tourists_should_bring_along: this.what_tourists_should_bring_along,
					itinerary_for_the_experience: this.itinerary_for_the_experience,
					number_that_each_tour_can_admit :  this.number_that_each_tour_can_admit,

					// experience_type_id
					// about_merchant
					// contact_email
					// location
					// state
					// offerings
					// naira_price
					// dollar_price
					// pounds_price
					// price_from
					// price_to
					// extra_peeks
					// drink_types
					// dining_options
					// has_outdoor_sitting
					// opening_and_closing_hours
					// cancellation_policy
					// tourist_expected_items
					// nuumber_admittable
					// experiences_type_id
		   //          history
				}
				this.$validator.validateAll().then(result => {
                    if (result){
                        
                        // this.$
                    }
                    else{
                        this.$noty.error("Oops, something went wrong!")
                    }
                });
			}
		},
		computed: {
			...mapState(['experience_types'])
		},
		created() {
			this.getExperienceTypes()
			console.log(this.experience_types)
		}
	}
</script>

<style>
	.form-holder {
		width: 100%;
		/*height: 300px;*/
	}
	.new_experience {
		margin-top: 15px;

	}
	.new_experience_title {
		font-size: 3em;
	  	font-weight: bolder;
	  	color: #f81894;
	}
	.new_experience_content h2 {
		color: #F81894;
		font-weight: bolder;
		text-align: center;
	}
	.new_experience_content label {
		color: grey;
		font-size: 16px;
	}
	.new_experience_input {
		/*border-bottom: none;*/
		/*background-image: linear-gradient(to top, #989a9f, #adaeb2, #c3c3c6, #d8d8da, #eeeeee);*/
		border-radius: 4px;
		/*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
		height: 50px;
		font-size: 16px;
		border-radius: 10px;
	    border-top: none;
	    border-left: none;
	    border-right: none;
        border: 1px solid #000;    
        height: 46px !important;
	}
	.submit-exp-textarea {
	}
	.uploaded_image {
		border: 3px solid #c3c3c6;
		height: 250px;
		width: 100%;
		background: url('../assets/shibuya.png');
	    background-position: center;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.submit_exp_btn {
		background: #F81894;
	    border: none;
	    font-size: 16px;
	    width: 120px;
	    height: 36px;
	    border-radius: 8px;
	    background-color: #f81894;
	    color: #FFF;
	}
	.prev_btn {
		color: #F81894;
		font-weight: bolder;
		background: #FFF;
	    text-align: left !important;
	}
	textarea.form-control {
		border-radius: 10px;
        border: 1px solid #000; 
        height: 70px;
	}
	.form-holder .submit_exp_btn {
		text-align: center;
	}
</style>