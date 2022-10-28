import {snakeCase} from 'change-case';

export function snakifyString(str: string): string {
	return snakeCase(str);
}

export function snakifyObject(obj: {[key: string]: any}) {
	if (!obj || typeof obj !== 'object') {
		return {};
	}

	const output: {[key: string]: any} = {};
	const keys = Object.keys(obj);
	for (const key of keys) {
		let val = obj[key];
		if (val && typeof val === 'object') {
			val = snakifyObject(val);
		}
		output[snakeCase(key)] = val;
	}

	return output;
}
