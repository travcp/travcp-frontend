<template>
	<div>
		<vue-headful
            title="Error 404 | TravvApp"
            description="Description from travvApp"
        />
		<Navbar />
		<EmptyResult />
		<!-- <Footer /> -->
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import EmptyResult from '@/components/EmptyResult.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		name: 'NotFound',
		components: {
			Navbar,
			EmptyResult,
			Footer
		}
	}
</script>