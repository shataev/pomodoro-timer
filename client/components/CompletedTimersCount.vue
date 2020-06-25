<template>
	<div class="completed-timers-count flex items-center text-white" v-if="completedTimersCount">
		<span class="completed-timers-count__icon w-6 h-6 mr-2 bg-contain bg-no-repeat bg-center"></span>
		<span class="completed-timers-count__count">
			{{completedTimersCount}}
		</span>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: "CompletedTimersCount",
		computed: {
			...mapState( {
					'completedTimersCount': state => state.timer.completedTimersCount
				}
			)
		}
	};
</script>

<style scoped>

	.completed-timers-count__icon {
		background-image: url('../assets/images/tomato.svg');
	}

</style>