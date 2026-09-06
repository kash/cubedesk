import {GeneralAllParams} from '@/util/hooks/useGeneral';

const initialState: GeneralAllParams = {
	app_loaded: false,
	browser_session_id: null,
	mobile_mode: false,
	force_nav_collapsed: false,
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

		default: {
			return {
				...initialState,
				...state,
			};
		}
	}
};
