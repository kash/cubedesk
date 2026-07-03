import {trpc} from '../util/trpc';
import {Friendship} from '@/types/friendship';

export function getMe() {
	return async (dispatch) => {
		let me = await trpc.user.me.query();
		if (!me || !Object.keys(me).length) {
			me = null;
		}

		dispatch({
			type: 'SET_ME',
			payload: {
				me,
			},
		});
	};
}

export function addFriendships(friends: Friendship[]) {
	return {
		type: 'ADD_FRIENDSHIPS',
		payload: friends,
	};
}

export function addFriendship(friend: Friendship) {
	return {
		type: 'ADD_FRIENDSHIP',
		payload: {
			friend,
		},
	};
}

export function removeFriendship(id: string) {
	return {
		type: 'REMOVE_FRIENDSHIP',
		payload: {
			id,
		},
	};
}
