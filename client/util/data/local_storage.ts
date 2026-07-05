export function getLocalStorage(key: string) {
	const raw = localStorage.getItem(key);
	if (raw === null) {
		return null;
	}

	try {
		return JSON.parse(raw);
	} catch (e) {
		if (raw === 'true') {
			return true;
		} else if (raw === 'false') {
			return false;
		}

		return raw;
	}
}

export function setLocalStorageObject(key: string, value: object) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function setLocalStorage(key: string, value: string) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function deleteLocalStorage(key: string) {
	localStorage.removeItem(key);
}
