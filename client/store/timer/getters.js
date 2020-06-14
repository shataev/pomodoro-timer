import { addStartingZero } from '../../helpers';

export default {
	getTimeLeftStr ( state ) {
		const timeLeft = state.timer.timeLeft,
			minutes = Math.trunc( timeLeft / 60 ),
			seconds = timeLeft % 60;

		return `${addStartingZero(minutes)}:${addStartingZero(seconds)}`
	}
};