export default {
	'SET_DURATION': function ( state, duration ) {
		state.duration = duration;
	},
	'SET_TIME': function ( state, timeStr ) {
		state.time = timeStr;
	},
	'RESET_TIME': function ( state ) {
		state.time = '00:00';
	}
};