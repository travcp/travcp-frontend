<template>
	<div>
		<Navbar />
		<div class="new_experience">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="card" style="width: 100%;border: none;">
						  <div class="card-body">
						    <div class="row">
						    	<div class="col-12">
						    		<div class="new_experience_content">
						    			<h2 style="font-size: 1.5em">Add New</h2>
						    			<br>	
						    			<form>
							    			<div class="row">
							    				<div class="col-md-8">
									    			<div class="row">
									    				<div class="form-group col-md-6">
															<label for="">Select Experience Type</label>
															<select id="inputState" class="form-control new_experience_input">
														        <option selected>Select</option>
														        <option v-for="experience_type in experience_types">{{ experience_type.name }}</option>
														    </select>
														</div>
									    				<div class="form-group col-md-6">
															<label for="">About the experience designer</label>
															<textarea cols="30" rows="10" class="form-control"></textarea>
														</div>
														<div class="form-group col-md-6">
															  <label class="">City</label>
															  <input type="text" class="form-control new_experience_input" placeholder="City">
														</div> <br> <br>
														<div class="form-group col-md-6">
															  <label class="">Offerings on tour ( drinks, snacks, etc)</label>
															  <input type="text" class="form-control new_experience_input" placeholder="Offerings on tour ( drinks, snacks, etc)">
														</div>
									    				<div class="form-group col-md-6">
															<label for="">Language</label>
															<select id="inputState" class="form-control new_experience_input">
														        <option selected>Select</option>
														        <option>English</option>
														      </select>
														</div>
									    				<div class="form-group col-md-6">
															<label for="">Short descriptions of the experience</label>
															<textarea cols="30" rows="10" class="form-control"></textarea>
														</div>
									    				<div class="form-group col-md-6">
															<label for="">Pictures</label>
															<input type="file" class="form-control" name="" multiple="true">
														</div>
														<div class="form-group col-md-6">
															  <label class="">Price in Naira, Dollars and Pounds</label>
															  <input type="text" class="form-control new_experience_input" placeholder="$200,000">
														</div>
														<div class="form-group col-md-6">
															  <label class="">Dates and time</label>
															  <input type="text" class="form-control new_experience_input" placeholder="Date and time">
														</div>
														<div class="form-group col-md-6">
															  <label class="">Where they would meet up with clients with map</label>
															  <input type="text" class="form-control new_experience_input" placeholder="Where they would meet up with clients with map">
														</div>
														<div class="form-group col-md-6">
															  <label class="">What tourists should bring along</label>
															  <input type="text" class="form-control new_experience_input" placeholder="What tourists should bring along">
														</div>
														<div class="form-group col-md-6">
															  <label class="">Itinerary for the experience</label>
															  <input type="text" class="form-control new_experience_input" placeholder="Itinerary for the experience">
														</div>
														<div class="form-group col-md-6">
															  <label class="">Number that each tour can admit</label>
															  <input type="text" class="form-control new_experience_input" placeholder="Number that each tour can admit">
														</div>
									    				<!-- <div class="form-group col-6">
															<label for="">Category</label>
															<select id="inputState" class="form-control new_experience_input">
														        <option selected>Select</option>
														        <option>a category here</option>
														      </select>
														</div> -->
														<!-- <div class="form-group col-6">
															<div class="custom-file">
															  <input type="file" class="custom-file-input" id="customFile">
															  <label class="custom-file-label" for="customFile">Upload Image</label>
															</div>
														</div> -->
														<!-- <div class="form-group col-6">
															  <label class="">Title</label>
															  <input type="text" class="form-control new_experience_input" placeholder="TravvApp Inc.">
														</div> -->
														<div class="col-6"></div>
														<div class="col-6"></div>
														<!-- <div class="col-12">
															  <h5>More Info</h5>
															  <p>
															  	asldiasjdaospd aspdas pdasjdpoijaspd sa dasoipdjspo asdf siofdsfidasf[0awpfne pa asdifasdlmfap fda fpsdf apfsidp]
															  </p>
														</div> -->
														<!-- <div class="col-8"></div> -->
									    			</div>
							    				</div>
							    				<div class="col-md-4">
							    					<h5>Uploaded Image</h5> <br>
							    					<div class="uploaded_image">
							    						
							    					</div> <br>
													<button type="button" class="btn btn-lg submit_exp_btn">SUBMIT</button>

							    				</div>
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
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import Footer from '@/components/Footer.vue';
	import { mapActions, mapState } from 'vuex';

	export default {
		name: 'NewExperience',
		components: {
			Navbar, Footer
		},
		methods: {
			...mapActions(['getExperienceTypes']),
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
	.new_experience {
		margin-top: 97px;

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
		border-radius: 0;
	    border-top: none;
	    border-left: none;
	    border-right: none;
	}
	.uploaded_image {
		border: 3px solid #c3c3c6;
		height: 250px;
		width: 70%;
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
	textarea.form-control {
		border-top: none;
	    border-left: none;
	    border-right: none;
        height: 70px;
	}
</style>