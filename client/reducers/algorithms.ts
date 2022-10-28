const initialState = {
	custom: {},
	favorites: {},
	overrides: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FORCE_OVERRIDE_ALGORITHMS': {
			const {newState} = action.payload;
			return {
				...state,
				...newState,
			};
		}
		case 'FAVORITE_ALGORITHM': {
			const favorites = {...state.favorites};
			const {cubeKey, val} = action.payload;
			favorites[cubeKey] = val;

			return {
				...state,
				favorites,
			};
		}

		case 'CREATE_CUSTOM_TRAINER': {
			const custom = state.custom;
			custom[action.payload.id] = action.payload;

			return {
				...state,
				custom,
			};
		}

		case 'UPDATE_CUSTOM_TRAINER': {
			const custom = state.custom;

			custom[action.payload.id] = action.payload;

			return {
				...state,
				custom,
			};
		}

		case 'DELETE_CUSTOM_TRAINER': {
			const custom = state.custom;

			if (!custom[action.payload.id]) {
				return state;
			}

			delete custom[action.payload.id];
			return {
				...state,
				custom,
			};
		}

		case 'UPDATE_ALGORITHM_OVERRIDE': {
			const overrides = {...state.overrides};
			const {cubeKey, data} = action.payload;
			overrides[cubeKey] = data;

			return {
				...state,
				overrides,
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
