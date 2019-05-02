<template>
	<div>
		<Navbar />
		<app-review />
	</div>
</template>

<script>
	import Review from '@/components/dashboard/review.vue';
	import Navbar from '@/components/Navbar';

	export default {
		name: 'Review',
		components: {
			'app-review': Review,
			Navbar
		}
	}
</script>