import {getJwtString} from '../util/auth';
import GraphQLError from '../util/graphql_error';
import {checkPassword} from '../util/password';
import {getUserByEmail, sanitizeUser} from '../models/user_account';

const gqlMutation = `
	logOut: PublicUserAccount!
	authenticateUser(email: String!, password: String!): PublicUserAccount!
`;

const mutateActions = {
	authenticateUser: async (_, {email, password}, {res}) => {
		const user = await getUserByEmail(email);
		if (!user) {
			throw new GraphQLError(400, 'Invalid login');
		}

		const goodPass = await checkPassword(password, user.password);
		if (!goodPass) {
			throw new GraphQLError(400, 'Invalid login');
		}

		const jwt = getJwtString(user);
		res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

		return sanitizeUser(user);
	},
	logOut: async (_, params, {res, user}) => {
		res.clearCookie('session');
		return sanitizeUser(user);
	},
};

module.exports = {
	gqlMutation,
	mutateActions,
};
