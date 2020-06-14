import { START_TIMER, RESET_TIMER, INCREMENT_TIMER_COUNT, DECREMENT_TIME_LEFT } from './actions';

export default {
	[ START_TIMER ]: function ( state, timer ) {
		state.timer = timer;
	},
	[ RESET_TIMER ]: function ( state ) {
		state.timer = {
			id: null,
			type: null,
			timeLeft: 0
		};
	},
	[ DECREMENT_TIME_LEFT ]: function ( state ) {
		state.timer.timeLeft -= 1;
	},
	[ INCREMENT_TIMER_COUNT ]: function ( state ) {
		state.timerCount += 1;
	}
};