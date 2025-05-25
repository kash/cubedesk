const initialState = {
	openCategory: null,
	selectedHelpPage: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_HELP_PAGE': {
			const {page} = action.payload;

			return {
				...state,
				openCategory: page.category,
				selectedHelpPage: page,
			};
		}

		case 'TOGGLE_HELP_OPEN_CATEGORY': {
			const {id} = action.payload;

			return {
				...state,
				openCategory: id,
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
