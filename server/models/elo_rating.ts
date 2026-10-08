import {getPrisma} from '@/server/database';
import {EloConst} from '@/server/match/pair/elo/calc_elo';
import {getUserByIdWithProfile} from '@/server/models/user_account';

const ELO_COLUMN_PREFIX = 'elo_';
const GAMES_COLUMN_PREFIX = 'games_';

export interface UserEloForEventType {
	userId: string;
	elo: number;
	games: number;
}

async function createEloRating(userId: string) {
	const user = await getUserByIdWithProfile(userId);
	if (!user?.profile) {
		throw new Error(`Cannot create ELO rating: user ${userId} or their profile not found`);
	}

	return getPrisma().eloRating.create({
		data: {
			user_id: user.id,
			profile_id: user.profile.id,
			elo_overall_rating: EloConst.ELO_STARTING_VALUE,
			elo_222_rating: EloConst.ELO_STARTING_VALUE,
			elo_333_rating: EloConst.ELO_STARTING_VALUE,
			elo_444_rating: EloConst.ELO_STARTING_VALUE,
		},
	});
}

export async function getUserEloRatingByEventType(userId: string, eventType: string): Promise<UserEloForEventType> {
	const rating = await getUserEloRating(userId);
	const elo: number = rating[getEloRatingColumnNameFromEventType(eventType)];
	const games: number = rating[getGameCountColumnNameFromEventType(eventType)];

	return {
		userId,
		elo,
		games,
	};
}

async function getUserEloRating(userId: string) {
	const rating = await getPrisma().eloRating.findUnique({
		where: {
			user_id: userId,
		},
	});

	if (!rating) {
		return createEloRating(userId);
	}

	return rating;
}

export function getEloRatingColumnNameFromEventType(eventType: string) {
	return `${ELO_COLUMN_PREFIX}${eventType}_rating`;
}

function getGameCountColumnNameFromEventType(eventType: string) {
	return `${GAMES_COLUMN_PREFIX}${eventType}_count`;
}

// no need anymore
async function getRealGameCountForEventType(userId: string, eventType: string) {
	return getPrisma().matchParticipant.count({
		where: {
			user_id: userId,
			abandoned: false,
			match: {
				match_session: {
					game_options: {
						event_type: eventType,
					},
				},
				ended_at: {
					lte: new Date(),
				},
			},
		},
	});
}

export async function incrementGameCountForEventType(userId: string, eventType: string) {
	const currentElo = await getUserEloRating(userId);
	const column = getGameCountColumnNameFromEventType(eventType);
	const currentCount = currentElo[column];

	const newVal = currentCount + 1;

	return getPrisma().eloRating.update({
		where: {
			user_id: userId,
		},
		data: {
			[column]: newVal,
		},
	});
}

export function updateEloRating(userId: string, eventType: string, value: number) {
	const column = getEloRatingColumnNameFromEventType(eventType);

	return getPrisma().eloRating.update({
		where: {
			user_id: userId,
		},
		data: {
			[column]: value,
		},
	});
}
