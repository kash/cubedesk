import _ from 'lodash';

function omitDeep(collection: object, excludeKeys: string[]) {
	function omitFn(value) {
		if (value && typeof value === 'object') {
			excludeKeys.forEach((key) => {
				delete value[key];
			});
		}
	}

	return _.cloneDeepWith(collection, omitFn);
}

// Strips legacy GraphQL __typename keys (still present in old exported/offline data)
export function removeTypename<T extends object>(data: T): T {
	return omitDeep(data, ['__typename']) as T;
}
