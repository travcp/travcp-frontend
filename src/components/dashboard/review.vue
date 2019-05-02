<template>
	<div class="review">
		<div class="row">
			<div class="col-md-12">
				<div class="review_heading">
					<h1>Osaka, Japan</h1>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-5">
						<h2>Average Rating</h2>
						<p>Based on 450 ratings</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '../Navbar.vue';
	export default {
		name: 'Review',
		data(){return{

		}},
		components: {
			Navbar
		}
	}
</script>

<style scoped>
	.review_heading {
		height: 250px;
		width: 100%;
		margin-top: 92px;
		text-align: center;
		padding: 70px;
		background: url('../../assets/shibuya.png');
	    background-position: center;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.review_heading h1 {
		font-weight: bolder;
		color: #FFF;
	}
</style>