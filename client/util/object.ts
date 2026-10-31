function omitDeep(value: unknown, excludeKeys: string[]): unknown {
	if (Array.isArray(value)) {
		return value.map((item) => omitDeep(item, excludeKeys));
	}

	if (!value || typeof value !== 'object') {
		return value;
	}

	const prototype = Object.getPrototypeOf(value);
	if (prototype !== Object.prototype && prototype !== null) {
		return value;
	}

	const output: Record<string, unknown> = {};
	for (const [key, child] of Object.entries(value)) {
		if (!excludeKeys.includes(key)) {
			output[key] = omitDeep(child, excludeKeys);
		}
	}

	return output;
}

// Strips legacy GraphQL __typename keys (still present in old exported/offline data)
export function removeTypename<T extends object>(data: T): T {
	return omitDeep(data, ['__typename']) as T;
}
