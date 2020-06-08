<template>
	<div class="pomodoro-timer w-6/12 flex flex-col justify-center align-middle">
		<clock></clock>
		<div class="pomodoro-timer__buttons flex flex-col items-center">
			<pomodoro-button class="bg-red-400"
							 @click="startTimer"
							 :label="'Start tomato'"></pomodoro-button>
			<pomodoro-button class="bg-gray-600" :label="'Take a break'"></pomodoro-button>
			<pomodoro-button class="bg-yellow-600"
							 @click="resetTimer"
							 :label="'Reset'"></pomodoro-button>
		</div>
		<div class="pomodoro-timer__stats">

		</div>
	</div>
</template>

<script>
	import Clock from '@/components/Clock';
	import Button from '@/components/Button';
	import { mapState, mapMutations } from 'vuex';

	export default {
		name: "Timer",
		data () {
			return {
				timerId: undefined,
				seconds: 0
			};
		},
		components: {
			Clock,
			'pomodoro-button': Button
		},
		computed: {
			...mapState( [ 'time', 'duration' ] )
		},
		methods: {
			...mapMutations( [
				'SET_TIME',
				'RESET_TIME'
			] ),
			startTimer () {
				this.timerId = setInterval( this.tick, 1000 );
			},
			tick () {
				const time = new Date( 2000, 0, 1, 0, this.duration, this.seconds-- );
				const minAndSec = time.toTimeString().slice( 3, 8 );

				this.SET_TIME( minAndSec );
			},
			resetTimer () {
				clearInterval( this.timerId );
				this.seconds = 0;
				this.RESET_TIME();
			}
		}
	};
</script>

<style scoped>

</style>