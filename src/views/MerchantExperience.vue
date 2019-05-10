<template>
	<div>
		<Navbar />
		<div class="merchant_experience">
			<div class="row">
				<div class="col-md-12">
					<div class="merchant_experience_heading">
						<h1>Experiences</h1>
					</div>
				</div>
				<div class="col-md-12">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<br>
								<router-link to="/dashboard/new-exp" style="text-decoration: none;"><button type="button" class="btn btn-lg add_exp_btn">+ Add Experience</button></router-link>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div class="col-4" style="padding-left: 60px;">
								<div class="card merchant_experience_card" style="width: 18rem;">
								  <img class="card-img-top" src="../assets/body_merchant_experience.jpg" alt="Card image cap">
								  <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
								    <div class="row">
								    	<div class="col-6">
								    		<p>Tokyo, Japan</p>
								    	</div>
								    	<div class="col-6">
								    		<p>4.75 * | 500</p>
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
		<!-- <Footer /> -->
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		name: 'MerchantExperience',
		components: {
			Navbar,
			Footer
		}
	}
</script>

<style>
	.merchant_experience_heading {
		height: 250px;
		width: 100%;
		margin-top: 92px;
		text-align: center;
		padding: 90px;
		background: url('../assets/head_merchant_experience.jpg');
	    background-position: center;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.merchant_experience_heading h1 {
		font-weight: bolder;
		color: #FFF;
	}
	.add_exp_btn{
		background: #F81894;
	    border: none;
	    font-size: 16px;
	    width: 180px;
	    height: 36px;
	    border-radius: 8px;
	    background-color: #f81894;
	    color: #FFF;
	}
	.merchant_experience_card .card-body {
		background: #F81894;
		color: #FFF;
		font-weight: bolder;
	}
	.merchant_experience_card {
		margin-top: 40px;
	}
</style>