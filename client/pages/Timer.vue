<template>
	<div class="pomodoro-timer h-full w-full flex flex-col justify-center align-middle">
		<clock :time="timeLeft"></clock>
		<div class="pomodoro-timer__buttons flex flex-col items-center">
			<pomodoro-button class="bg-red-400"
							 :class="{'is-disabled': currentTimerType === 'work'}"
							 @click="startTimer('work')"
							 :label="'Start tomato'"></pomodoro-button>
			<pomodoro-button class="bg-gray-600"
							 :class="{'is-disabled':  currentTimerType === 'break'}"
							 @click="startTimer('break')"
							 :label="'Take a break'"></pomodoro-button>
			<pomodoro-button class="bg-yellow-600"
							 @click="resetTimer"
							 :label="'Reset'"></pomodoro-button>
		</div>
		<div class="pomodoro-timer__stats">
			<completed-timers-count></completed-timers-count>
		</div>
	</div>
</template>

<script>
	import Clock from '@/components/Clock';
	import Button from '@/components/Button';
	import CompletedTimersCount from '@/components/CompletedTimersCount';
	import { mapGetters, mapActions, mapState } from 'vuex';
	import { START_TIMER, RESET_TIMER } from '@store/modules/timer/actions';

	export default {
		name: "Timer",
		components: {
			Clock,
			'pomodoro-button': Button,
			CompletedTimersCount
		},
		computed: {
			...mapGetters( 'timer', {
				timeLeft: 'getTimeLeftStr',
				currentTimerType: 'getCurrentTimerType',
			} )
		},
		methods: {
			...mapActions( 'timer', {
					startTimer: START_TIMER,
					resetTimer: RESET_TIMER
				}
			)
		}
	};
</script>

<style scoped>
	.pomodoro-timer__stats {
		display: flex;
		justify-content: center;
	}
</style>