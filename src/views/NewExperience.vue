<template>
	<div>
		<Navbar />
		<div class="new_experience">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="card" style="width: 100%;background: #eee;">
						  <div class="card-body">
						    <div class="row">
						    	<div class="col-12">
						    		<div class="new_experience_content">
						    			<h2>Add New</h2>
						    			<div class="row">
						    				<div class="col-8">
								    			<div class="row">
								    				<div class="form-group col-6">
														<label for="">Category</label>
														<select id="inputState" class="form-control new_experience_input">
													        <option selected>Select</option>
													        <option>a category here</option>
													      </select>
													</div>
													<div class="form-group col-6">
														<div class="custom-file">
														  <input type="file" class="custom-file-input" id="customFile">
														  <label class="custom-file-label" for="customFile">Upload Image</label>
														</div>
													</div>
													<div class="form-group col-6">
														  <label class="">Title</label>
														  <input type="text" class="form-control new_experience_input" placeholder="TravvApp Inc.">
													</div>
													<div class="col-6"></div>
													<div class="form-group col-6">
														  <label class="">Price</label>
														  <input type="text" class="form-control new_experience_input" placeholder="$200,000">
													</div>
													<div class="col-6"></div>
													<div class="col-12">
														  <h5>More Info</h5>
														  <p>
														  	asldiasjdaospd aspdas pdasjdpoijaspd sa dasoipdjspo asdf siofdsfidasf[0awpfne pa asdifasdlmfap fda fpsdf apfsidp]
														  </p>
													</div>
													<!-- <div class="col-8"></div> -->
								    			</div>
						    				</div>
						    				<div class="col-4">
						    					<h5>Uploaded Image</h5> <br>
						    					<div class="uploaded_image">
						    						
						    					</div> <br>
												<button type="button" class="btn btn-lg submit_exp_btn">SUBMIT</button>

						    				</div>
						    			</div>
						    		</div>
						    	</div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';

	export default {
		name: 'NewExperience',
		components: {
			Navbar
		}
	}
</script>

<style>
	.new_experience{
		margin-top: 97px;

	}
	.new_experience_content h2 {
		color: #F81894;
		font-weight: bolder;
		text-align: center;
	}
	.new_experience_content label {
		font-weight: bolder;
		color: grey;
		font-size: 21px;
	}
	.new_experience_input {
		border-bottom: none;
		background-image: linear-gradient(to top, #989a9f, #adaeb2, #c3c3c6, #d8d8da, #eeeeee);
		border-radius: 4px;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
		height: 50px;
		font-size: 18px;
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
	.submit_exp_btn{
		background: #F81894;
	      border: none;
	      font-size: 16px;
	      width: 120px;
	      height: 36px;
	      border-radius: 8px;
	      background-color: #f81894;
	      color: #FFF;
	}
</style>