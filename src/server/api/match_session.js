import {checkLoggedIn} from '../utils/auth';
import {getMatchSessionById} from '../models/match_session';

export const gqlQuery = `
	matchSession(id: String): MatchSession!
`;

export const queryActions = {
	matchSession: async (_, {id}, {user}) => {
		checkLoggedIn(user);

		return await getMatchSessionById(id);
	},
};
