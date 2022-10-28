import {
	getUserByEmail,
	sanitizeUser,
	updateUserAccountPassword
} from '../models/user_account';
import {sendEmail, sendEmailWithTemplate} from '../services/ses';
import {claimForgotPassword, createForgotPassword, getForgotPassword} from '../models/forgot_password';
import GraphQLError from '../util/graphql_error';
import {getJwtString} from '../util/auth';

export const gqlMutation = `
	sendForgotPasswordCode(email: String): Void
	checkForgotPasswordCode(email: String, code: String): Boolean
	updateForgotPassword(email: String, code: String, password: String): PublicUserAccount
`;

function forgotPasswordLessThan15Min(fp) {
	const createdAt = new Date(fp.created_at);
	const FIFTEEN_MIN = 15 * 60 * 1000;

	return new Date() - createdAt < FIFTEEN_MIN;
}

export const mutateActions = {
	sendForgotPasswordCode: async (_, {email}) => {
		const user = await getUserByEmail(email);

		if (user) {
			const fp = await createForgotPassword(user);

			sendEmailWithTemplate(user, 'Reset Your CubeDesk Password', 'forgot_password', {
				code: fp.code,
				message: 'Please use the code below to reset your password:',
			});
		}
	},
	checkForgotPasswordCode: async (_, {email, code}) => {
		const user = await getUserByEmail(email);

		if (!user) {
			return false;
		}

		const fp = (await getForgotPassword(user))[0];

		if (!fp) {
			return false;
		}

		return fp && fp.code === code && forgotPasswordLessThan15Min(fp);
	},
	updateForgotPassword: async (_, {email, code, password}, {res}) => {
		const user = await getUserByEmail(email);

		if (!user) {
			return false;
		}

		const fp = (await getForgotPassword(user))[0];
		if (!fp) {
			throw new GraphQLError(400, 'Invalid code');
		}

		const passed = fp && fp.code === code && forgotPasswordLessThan15Min(fp);
		if (!passed) {
			throw new GraphQLError(400, 'Invalid code');
		}

		await claimForgotPassword(fp);
		await updateUserAccountPassword(user.id, password);

		const jwt = getJwtString(user);
		res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

		return sanitizeUser(user);
	},
};
