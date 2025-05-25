export function getLocalStorage(key: string) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		const val = localStorage.getItem(key);
		if (val === 'true') {
			return true;
		} else if (val === 'false') {
			return false;
		}

		return val;
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
