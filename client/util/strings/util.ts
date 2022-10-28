export function numberWithCommas(x) {
	return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function titleCase(x) {
	const parts = x.split(' ');
	for (let i = 0; i < parts.length; i += 1) {
		const str = parts[i];
		if (str && str.trim()) {
			parts[i] = str[0].toUpperCase() + str.slice(1);
		}
	}

	return parts.join(' ');
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
