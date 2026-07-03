export function setSsrValue(key: string, value: any) {
	return {
		type: 'SET_SSR_VALUE',
		payload: {
			key,
			value,
		},
	};
}
