const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SSR_VALUE': {
			const newState = {...state};
			const {key, value} = action.payload;

			newState[key] = value;

			return {
				...newState,
			};
		}

		default: {
			return {
				...initialState,
				...state,
			};
		}
	}
};
