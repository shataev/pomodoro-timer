<template>
	<div class="pomodoro-timer__time text-white text-6xl text-center">
		{{getTime}}
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: "Clock",
		computed: {
			...mapGetters( [ 'getTime' ] )
		}
	};
</script>

<style scoped>

</style>