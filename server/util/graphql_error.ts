import {ErrorCode, ErrorMessage} from '../constants/errors';
import {ApolloError} from 'apollo-server';

const defaultErrorMessage = {
	[ErrorCode.FORBIDDEN]: ErrorMessage.FORBIDDEN,
	[ErrorCode.BAD_INPUT]: ErrorMessage.BAD_INPUT,
	[ErrorCode.NOT_FOUND]: ErrorMessage.RESOURCE_NOT_FOUND,
};

export default class GraphQLError extends ApolloError {
	constructor(code: ErrorCode, message?: ErrorMessage | string, extensions?: {[key: string]: any}) {
		super(message, code, extensions);

		if (!message) {
			this.message = defaultErrorMessage[code];
		}
	}
}
