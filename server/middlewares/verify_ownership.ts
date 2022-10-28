import {Extensions, MiddlewareInterface, NextFn, ResolverData} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {GraphQLFieldConfig, GraphQLResolveInfo} from 'graphql';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';

export const extractFieldConfig = (info: GraphQLResolveInfo): GraphQLFieldConfig<any, any> => {
	const {type, extensions, description, deprecationReason} = info.parentType.getFields()[info.fieldName];

	return {
		type,
		description,
		extensions,
		deprecationReason,
	};
};

// If all conditions are met, THEN do the ownership check
export function VerifyOwnership(queryConditions: (record: any, context: GraphQLContext) => boolean) {
	return Extensions({
		queryConditions,
	});
}

export class VerifyOwnershipMiddleware implements MiddlewareInterface<GraphQLContext> {
	async use({info, context}: ResolverData<GraphQLContext>, next: NextFn) {
		const {queryConditions} = extractFieldConfig(info).extensions;

		const record = await next();

		if (!queryConditions) {
			return record;
		}

		// This should already be handled with the Authorized middleware but doing it here for safety
		if (!context.user) {
			throw new GraphQLError(ErrorCode.UNAUTHENTICATED);
		}

		// Turn record into array if not already
		let recordArray = record;
		if (!Array.isArray(record)) {
			recordArray = [record];
		}

		const keys = Object.keys(queryConditions);
		const isOwned = recordArray.every((record) =>
			keys.every((key) => {
				return record[key] === queryConditions[key];
			})
		);

		if (!isOwned) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return record;
	}
}
