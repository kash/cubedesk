import {GeneralAllParams} from '../util/hooks/useGeneral';

const initialState: GeneralAllParams = {
	app_loaded: false,
	browser_session_id: null,
	mobile_mode: false,
	force_nav_collapsed: false,
	modals: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_GENERAL': {
			const {key, value} = action.payload;

			return {
				...state,
				[key]: value,
			};
		}
		case 'OPEN_MODAL': {
			const modals = state.modals;
			modals.push(action.payload);

			return {
				...state,
				modals,
			};
		}
		case 'CLOSE_MODAL': {
			const modals = state.modals;
			modals.pop();

			return {
				...state,
				modals,
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
