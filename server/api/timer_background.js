import {checkLoggedIn} from '../util/auth';
import GraphQLError from '../util/graphql_error';
import {deleteTimerBackground, getTimerBackground, uploadTimerBackgroundWithFile} from '../models/timer_background';
import {ErrorCode} from '../constants/errors';
import {logger} from '../services/logger';

export const gqlMutation = `
	deleteTimerBackground: TimerBackground!
	uploadTimerBackground(file: Upload): TimerBackground!
	setTimerBackgroundHex(hex: String): TimerBackground!
`;

export const mutateActions = {
	deleteTimerBackground: async (_, params, {user}) => {
		checkLoggedIn(user);

		const background = await getTimerBackground(user);
		if (!background) {
			throw new GraphQLError(400, 'No background to delete');
		}

		await deleteTimerBackground(background);
		return background;
	},
	uploadTimerBackground: async (_, {file}, {user}) => {
		checkLoggedIn(user);

		if (!file) {
			throw new GraphQLError(400, 'File must be specified');
		}

		const {createReadStream, filename} = await file;

		const background = await getTimerBackground(user);

		if (background) {
			await deleteTimerBackground(background);
		}

		try {
			await uploadTimerBackgroundWithFile(user, filename, createReadStream);
		} catch (e) {
			logger.warn('Failed to upload timer background', {
				error: e,
			});
			throw new GraphQLError(ErrorCode.SERVER, e.message);
		}

		return await getTimerBackground(user);
	},
};
