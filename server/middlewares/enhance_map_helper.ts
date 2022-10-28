import {ArgsDictionary, Authorized, UseMiddleware} from 'type-graphql';
import {Role} from './auth';
import {VerifyOwnership} from './verify_ownership';
import GraphQLError from '../util/graphql_error';
import {ErrorCode, ErrorMessage} from '../constants/errors';
import {camelCase} from 'change-case';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {ResolverData} from 'type-graphql/dist/interfaces/ResolverData';
import {generateUUID} from '../../shared/code';

export const USER_ID_COLUMN = 'user_id';

type CustomMiddleware = (action: ResolverData<any>) => void;

interface ResolverInput {
	type: string;
	isPublic?: boolean;
	queryConditions?: (record: any, context: GraphQLContext) => boolean;
}

function runCustomMiddleware(middleware: CustomMiddleware, data: ResolverData<any>) {
	if (middleware && data) {
		middleware(data);
	}
}

/**
 * viewConditions: will override the default
 */
export function getResolverEnhanceMap(input: ResolverInput) {
	const {type, isPublic} = input;

	const defaultQueryCondition = (record: any, context: GraphQLContext) => {
		return record[USER_ID_COLUMN] === context.user.id;
	};

	const queryConditions = input.queryConditions || defaultQueryCondition;

	const deleteResolver = `delete${type}`;
	const updateResolver = `update${type}`;
	const queryUniqueResolver = camelCase(type);
	const queryManyResolver = camelCase(type) + 's';

	const auth = isPublic ? [] : [Authorized(Role.LOGGED_IN)];

	return {
		[type]: {
			_all: auth,
			[queryUniqueResolver]: [VerifyOwnership(queryConditions)],
			[queryManyResolver]: [VerifyOwnership(queryConditions)],
			[deleteResolver]: [VerifyOwnership(queryConditions)],
			[updateResolver]: [VerifyOwnership(queryConditions)],
		},
	};
}

export function getModelsEnhanceMap(type: string, conditions: {[key: string]: any} = {}) {
	return {
		[type]: {
			fields: {
				// _all: [VerifyOwnership(USER_ID_COLUMN, conditions)],
				_all: [
					UseMiddleware((_data, next) => {
						return next();
					}),
				],
			},
		},
	};
}

export function setRecordId(args: ArgsDictionary, context: GraphQLContext) {
	if (args.data.id) {
		throw new GraphQLError(ErrorCode.BAD_INPUT, ErrorMessage.NO_ID_IN_INPUT);
	}

	args.data.id = generateUUID();
}
