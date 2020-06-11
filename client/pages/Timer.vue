<template>
	<div class="pomodoro-timer h-full w-full flex flex-col justify-center align-middle">
		<clock :time="time"></clock>
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
				seconds: 0,
				time: '00:00'
			};
		},
		components: {
			Clock,
			'pomodoro-button': Button
		},
		computed: {
			...mapState( [ 'duration', 'tomatoCount' ] )
		},
		methods: {
			...mapMutations( [
				'RESET_TIME',
				'INCREMENT_TOMATO_COUNT'
			] ),
			startTimer () {
				this.timerId = setInterval( this.tick, 1000 );

				setTimeout( () => {
					this.INCREMENT_TOMATO_COUNT();
					this.resetTimer();
				}, this.duration * 60000 );
			},
			tick () {
				const time = new Date( 2000, 0, 1, 0, this.duration, this.seconds-- );
				const minAndSec = time.toTimeString().slice( 3, 8 );

				this.setTime( minAndSec );
			},
			resetTimer () {
				clearInterval( this.timerId );
				this.seconds = 0;
				this.setTime();
			},
			setTime ( time ) {
				this.time = time || '00:00';
			}
		}
	};
</script>

<style scoped>

</style>