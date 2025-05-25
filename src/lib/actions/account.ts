import {UserAccount} from '../../server/schemas/UserAccount.schema';
import {Friendship} from '../../server/schemas/Friendship.schema';
import { api } from '../../trpc/react';

export function getMe() {
	return async (dispatch) => {
		try {
			const me = await api.userAccount.me.query();

			dispatch({
				type: 'SET_ME',
				payload: {
					me: me || null,
				},
			});
		} catch (e) {
			dispatch({
				type: 'SET_ME',
				payload: {
					me: null,
				},
			});
		}
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
