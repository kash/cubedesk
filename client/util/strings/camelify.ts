import {camelCase} from 'change-case';

export function camelifyString(str: string): string {
	return camelCase(str);
}

export function camelifyObject<T extends {[key: string]: any}>(obj: T): T {
	if (!obj || typeof obj !== 'object') {
		return {} as T;
	}

	const output: {[key: string]: any} = {};
	const keys = Object.keys(obj);
	for (const key of keys) {
		let val = obj[key];
		if (val && typeof val === 'object' && !Array.isArray(val)) {
			val = camelifyObject(val);
		}
		output[camelCase(key)] = val;
	}

	return output as T;
}
