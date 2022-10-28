export function getBasicPlural(count: number | any[], word: string) {
	let arrSize = 0;
	if (typeof count === 'number') {
		arrSize = count;
	} else if (Array.isArray(count)) {
		arrSize = count.length;
	}

	return `${arrSize.toLocaleString()} ${word}${arrSize === 1 ? '' : 's'}`;
}
