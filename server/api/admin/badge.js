import {checkLoggedIn} from '../../util/auth';
import {
	addBadgeToUser,
	createBadgeType,
	deleteBadgeFromUser,
	deleteBadgeType,
	editBadgeType,
	getAllBadgeTypes,
	getBadgeTypeById,
	userHasBadge,
} from '../../models/badge';
import GraphQLError from '../../util/graphql_error';
import {getUserById} from '../../models/user_account';
import {validateEmptyRecord, validateOrFail} from '../../util/validation';

const badgeTypeInputSchema = {
	type: 'object',
	properties: {
		name: {
			title: 'Name',
			type: 'string',
			maxLength: 50,
			minLength: 1,
		},
		description: {
			title: 'Description',
			type: 'string',
			maxLength: 200,
		},
		priority: {
			title: 'Priority',
			type: 'integer',
			minimum: 0,
			maximum: 100,
		},
		color: {
			title: 'Color',
			description: 'ddColor',
			type: 'string',
			pattern: '#.+',
			minLength: 7,
			maxLength: 7,
			errorMessage: {
				pattern: 'Color must be a valid hex',
			},
		},
	},
	required: ['name', 'description', 'priority', 'color'],
	additionalProperties: false,
};

export const gqlQuery = `
    badgeTypes: [BadgeType]
`;

export const gqlMutation = `
    createBadgeType(input: BadgeTypeInput): BadgeType
    editBadgeType(id: String, input: BadgeTypeInput): BadgeType
    deleteBadgeType(id: String!): BadgeType
    addBadgeToUser(badgeTypeId: String, userId: String): Badge
    removeBadgeFromUser(badgeTypeId: String, userId: String): Badge
`;

export const queryActions = {
	badgeTypes: async (_, params, {user: admin}) => {
		checkLoggedIn(admin, true);

		return getAllBadgeTypes();
	},
};

export const mutateActions = {
	createBadgeType: async (_, {input}, {user: admin}) => {
		checkLoggedIn(admin, true);
		validateOrFail(badgeTypeInputSchema, input);

		return createBadgeType(admin, input);
	},
	editBadgeType: async (_, {id, input}, {user: admin}) => {
		checkLoggedIn(admin, true);

		const badgeType = await getBadgeTypeById(id);
		validateEmptyRecord(badgeType, 'Badge Type');

		validateOrFail(badgeTypeInputSchema, input);

		return editBadgeType(badgeType, input);
	},
	deleteBadgeType: async (_, {id}, {user: admin}) => {
		checkLoggedIn(admin, true);
		const badgeType = await getBadgeTypeById(id);
		validateEmptyRecord(badgeType, 'Badge Type');

		return deleteBadgeType(badgeType);
	},
	addBadgeToUser: async (_, {badgeTypeId, userId}, {user: admin}) => {
		const {user, badgeType} = await addRemoveBadge(admin, userId, badgeTypeId);

		return addBadgeToUser(user, badgeType);
	},
	removeBadgeFromUser: async (_, {badgeTypeId, userId}, {user: admin}) => {
		const {user, badgeType} = await addRemoveBadge(admin, userId, badgeTypeId, true);

		return deleteBadgeFromUser(user, badgeType);
	},
};

async function addRemoveBadge(admin, userId, badgeTypeId, checkForBadge) {
	checkLoggedIn(admin, true);

	const badgeType = await getBadgeTypeById(badgeTypeId);
	if (!badgeType) {
		throw new GraphQLError(404, 'Could not find badge type with that ID');
	}

	const user = await getUserById(userId);
	if (!user) {
		throw new GraphQLError(404, 'Could not find user with that ID');
	}

	const badge = await userHasBadge(user, badgeType);
	if (!badge && checkForBadge) {
		throw new GraphQLError(400, 'User does not have this badge');
	}

	return {user, badgeType};
}
