/**
 * Transform a string to title case
 * @param {string} str
 * @returns Title-cased string
 */
const toTitleCase = (str) => {
	const splitStr = str.toLowerCase().split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
};

/**
 * Convert a number to day of week
 * @param {number} day
 * @param {boolean} short
 * @returns Day of week
 */
const toDayOfWeek = (day, short) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if (short) {
		return days[day].substring(0, 3);
	}
	return days[day];
};

export { toTitleCase, toDayOfWeek };
