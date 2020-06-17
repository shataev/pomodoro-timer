/**
 * К числу от 0 до 9 добавляет в начало 0 и возвращает в виде строки, например, "03"
 * @param number {number}
 * @returns {String}
 */
export const addStartingZero = number => {
	let numerStr = '';

	if ( number >= 0 && number < 10 ) {
		numerStr = `0${number}`;
	} else {
		numerStr += number;
	}

	return numerStr;
};

/**
 * Однократно воспроизводит аудифайл. Принимает путь до этого файла в качестве аргумента
 * @param soundUrl {String}
 */
export const playSound = soundUrl => {
	const audio = new Audio( soundUrl );

	audio.play();
};
