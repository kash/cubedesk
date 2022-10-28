export function setSsrTempSolve(key, value) {
	return {
		type: 'SET_SSR_VALUE',
		payload: {
			key,
			value,
		},
	};
}

export function setSsrValue(key: string, value: any) {
	return {
		type: 'SET_SSR_VALUE',
		payload: {
			key,
			value,
		},
	};
}
