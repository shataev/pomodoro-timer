export const START_TIMER = 'START_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const DECREMENT_TIME_LEFT = 'DECREMENT_TIME_LEFT';
export const INCREMENT_TIMER_COUNT = 'INCREMENT_TIMER_COUNT';

export default {
	//Запускает таймер и через секунду обновляет оставшееся до его окончания время.
	[ START_TIMER ]: function ( { state, commit, dispatch }, timerType ) {

		//Если есть запущенный таймер, сбрасываем его
		if ( !!state.timer.id ) {
			dispatch( RESET_TIMER );
		}

		//Длительность таймера в секундах
		const durationSec = state.duration[ timerType ] * 60;

		//Каждую секунду оставшееся время уменьшается на единицу
		const timerId = setInterval( function () {
			dispatch( DECREMENT_TIME_LEFT );

			//Если оставшееся время равно нулю, удаляем таймер и увеличиваем количество полностью завершенных
			// рабочих таймеров на 1
			if ( state.timer.timeLeft === 0 ) {
				if ( state.timer.type === 'work' ) {
					dispatch( INCREMENT_TIMER_COUNT );
				}

				dispatch( RESET_TIMER );
			}
		}, 1000 );

		const timer = {
			id: timerId,
			type: timerType,
			timeLeft: durationSec
		};

		commit( START_TIMER, timer );
	},
	//Удаляет текущий таймер, чистит объект timer состояния модуля
	[ RESET_TIMER ]: function ( { state, commit } ) {
		const timerId = state.timer.id;

		if ( timerId ) {
			clearInterval( timerId );
		}

		commit( RESET_TIMER );
	},
	[ INCREMENT_TIMER_COUNT ]: function ( { commit } ) {
		commit( INCREMENT_TIMER_COUNT );
	},
	[ DECREMENT_TIME_LEFT ]: function ( { commit } ) {
		commit( DECREMENT_TIME_LEFT );
	}
};