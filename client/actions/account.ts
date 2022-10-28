import {gql} from '@apollo/client/core';
import {gqlQuery} from '../components/api';
import {USER_FOR_ME_FRAGMENT} from '../util/graphql/fragments';
import {UserAccount} from '../../server/schemas/UserAccount.schema';
import {Friendship} from '../../server/schemas/Friendship.schema';

export function getMe() {
	return async (dispatch) => {
		const query = gql`
			${USER_FOR_ME_FRAGMENT}

			query Query {
				me {
					...UserForMeFragment
				}
			}
		`;

		const res = await gqlQuery<{me: UserAccount}>(query, undefined, 'no-cache');

		let me = res.data.me;
		if (!me || !Object.keys(me).length) {
			me = null;
		}

		dispatch({
			type: 'SET_ME',
			payload: {
				me: res.data.me,
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
