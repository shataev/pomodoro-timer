import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const initialState = {
	timer: {
		id: null,
		type: null, //Тип таймера. 'work' - рабочий таймер, 'break' - перерыв.
		startTime: null,
		timeLeft: 0
	},
	//Длительность таймер в минутах
	duration: {
		work: 30,	//Рабочий таймер - 30мин
		break: 5 	//Перерыв - 5мин
	},
	//Количество полностью завершенных таймеров. Таймеры, остановленные по кнопке 'Reset' или 'Break' не учитываются
	completedTimersCount: 0,
	sound: {
		finish: require('../../../assets/audio/signal.mp3') //require - для корректной ссылки на файл в собрранном проекте
	}
};

export default {
	namespaced: true,
	state: initialState,
	mutations,
	getters,
	actions
}
