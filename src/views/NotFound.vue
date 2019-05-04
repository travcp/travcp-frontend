<template>
	<div>
		<Navbar />
		<h2>Oops. Sorry this page is not found</h2>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';

	export default {
		name: 'NotFound',
		components: {
			Navbar
		}
	}
</script>