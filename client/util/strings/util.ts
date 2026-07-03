export function numberWithCommas(x) {
	return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getHashCode(str: string) {
	let hash = 0;

	if (!str || !str.trim()) {
		return hash;
	}

	for (let i = 0; i < str.length; i++) {
		const chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}

	return hash;
}
