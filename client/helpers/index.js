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
 * Запрашивает файл с сервера по URL. Возвращает его в виде ArrayBuffer для дальнейшего использования
 * в качестве источника аудио
 * @param fileUrl {String}
 * @returns {ArrayBuffer}
 */
export const getAudioDataByUrl = async fileUrl => {
	const response = await fetch( fileUrl );

	if ( response.ok ) {
		const arrayBuffer = await response.arrayBuffer();

		return arrayBuffer;
	}
};
