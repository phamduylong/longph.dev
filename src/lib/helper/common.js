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
export { toTitleCase };
