<template>
	<div>
		<Navbar />
		<EmptyResult />
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';
	import EmptyResult from '@/components/EmptyResult.vue';

	export default {
		name: 'NotFound',
		components: {
			Navbar,
			EmptyResult
		}
	}
</script>