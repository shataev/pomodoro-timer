<template>
	<div class="pomodoro-timer__time text-white text-6xl text-center">
		{{time}}
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: "Clock",
		props: {
			time: {
				required: false,
				default: '00:00',
				type: String
			}
		}
	};
</script>

<style scoped>

</style>