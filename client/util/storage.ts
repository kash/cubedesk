import {Consts} from '../shared/consts';

export function getStorageURL(path: string | null | undefined): string | null {
	if (!path) {
		return null;
	}

	if (path.startsWith('/')) {
		path = path.substr(1);
	}

	return `${Consts.STORAGE_ORIGIN}/${path}`;
}

export function resourceUri(path: string) {
	const base = process.env.RESOURCES_BASE_URI;

	if (path.startsWith('/')) {
		path = path.substr(1);
	}

	return `${base}/${path}`;
}
