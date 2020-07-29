export const START_TIMER = 'START_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const DECREMENT_TIME_LEFT = 'DECREMENT_TIME_LEFT';
export const INCREMENT_TIMER_COUNT = 'INCREMENT_TIMER_COUNT';
export const PLAY_SOUND = 'PLAY_SOUND';
import { getAudioDataByUrl } from '../../../helpers/index';

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

			//Если оставшееся время равно нулю:
			// 1) удаляем таймер
			// 2) если завершился рабочий таймер, увеличиваем количество полностью завершенных рабочих таймеров на 1
			// 3) воспроизводим звукой сигнал

			if ( state.timer.timeLeft === 0 ) {
				if ( state.timer.type === 'work' ) {
					dispatch( INCREMENT_TIMER_COUNT );
				}

				dispatch( RESET_TIMER );
				dispatch( PLAY_SOUND );
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
	//Увеличивает количество полностью завершенных таймеров на единицу
	[ INCREMENT_TIMER_COUNT ]: function ( { commit } ) {
		commit( INCREMENT_TIMER_COUNT );
	},
	//Уменьшает оставшееся до окончания таймера время на 1 секунду
	[ DECREMENT_TIME_LEFT ]: function ( { commit } ) {
		commit( DECREMENT_TIME_LEFT );
	},
	//Запускает воспроизведение звукового сигнала
	[ PLAY_SOUND ]: async function ( { state, commit } ) {
		const audioCtx = new ( window.AudioContext || window.webkitAudioContext )();

		//Метод createBufferSource () интерфейса BaseAudioContext используется для создания нового AudioBufferSourceNode,
		//который можно использовать для воспроизведения аудиоданных, содержащихся в объекте AudioBuffer.
		// AudioBuffer создается с использованием BaseAudioContext.createBuffer
		// или возвращаются BaseAudioContext.decodeAudioData, когда он успешно декодирует звуковую дорожку.
		const source = audioCtx.createBufferSource();

		//аудиоданные в бинарном формате ArrayBuffer
		const arrayBufferSound = await getAudioDataByUrl( state.sound.finish );

		//decodeAudioData декодирует полученные аудиоданные
		source.buffer = await audioCtx.decodeAudioData( arrayBufferSound );

		//destination аудио-воспроизводящее устройство
		source.connect( audioCtx.destination );

		source.start();
	}
};