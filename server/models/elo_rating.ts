import {getPrisma} from '../database';
import {EloConst} from '../match/pair/elo/calc_elo';
import {getUserByIdWithProfile} from './user_account';

const ELO_COLUMN_PREFIX = 'elo_';
const GAMES_COLUMN_PREFIX = 'games_';

export interface UserEloForCubeType {
	userId: string;
	elo: number;
	games: number;
}

export async function createEloRating(userId: string) {
	const user = await getUserByIdWithProfile(userId);
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

export async function getUserEloRatingByCubeType(userId: string, cubeType: string): Promise<UserEloForCubeType> {
	const rating = await getUserEloRating(userId);
	const elo: number = rating[getEloRatingColumnNameFromCubeType(cubeType)];
	const games: number = rating[getGameCountColumnNameFromCubeType(cubeType)];

	return {
		userId,
		elo,
		games,
	};
}

export async function getUserEloRating(userId: string) {
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

export function getEloRatingColumnNameFromCubeType(cubeType: string) {
	return `${ELO_COLUMN_PREFIX}${cubeType}_rating`;
}

export function getGameCountColumnNameFromCubeType(cubeType: string) {
	return `${GAMES_COLUMN_PREFIX}${cubeType}_count`;
}

// no need anymore
async function getRealGameCountForCubeType(userId: string, cubeType: string) {
	return getPrisma().matchParticipant.count({
		where: {
			user_id: userId,
			abandoned: false,
			match: {
				match_session: {
					game_options: {
						cube_type: cubeType,
					},
				},
				ended_at: {
					lte: new Date(),
				},
			},
		},
	});
}

export async function incrementGameCountForCubeType(userId: string, cubeType: string) {
	const currentElo = await getUserEloRating(userId);
	const column = getGameCountColumnNameFromCubeType(cubeType);
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

export function updateEloRating(userId: string, cubeType: string, value: number) {
	const column = getEloRatingColumnNameFromCubeType(cubeType);

	return getPrisma().eloRating.update({
		where: {
			user_id: userId,
		},
		data: {
			[column]: value,
		},
	});
}
