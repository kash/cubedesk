const initialState = {
	me: null,
	friends: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FORCE_OVERRIDE_ACCOUNT': {
			const {newState} = action.payload;
			return {
				...state,
				...newState,
			};
		}
		case 'SET_ME': {
			const {me} = action.payload;
			return {
				...state,
				me,
			};
		}

		case 'SET_FRIENDSHIPS': {
			const {friends} = action.payload;

			return {
				...state,
				friends,
			};
		}

		case 'ADD_FRIENDSHIPS': {
			const friendMap = {};
			for (const friend of action.payload || []) {
				friendMap[friend.other_user_id] = friend;
			}

			const friends = {
				...state.friends,
				...friendMap
			};

			return {
				...state,
				friends,
			};
		}

		case 'ADD_FRIENDSHIP': {
			const {friend} = action.payload;

			const friends = {
				...state.friends,
				[friend.other_user_id]: friend,
			};

			return {
				...state,
				friends,
			};
		}

		case 'REMOVE_FRIENDSHIP': {
			const {id} = action.payload;
			const friends = {
				...state.friends,
			};

			delete friends[id];

			return {
				...state,
				friends,
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
