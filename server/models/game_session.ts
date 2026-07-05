import type {GameType} from '@/generated/prisma/client';
import {gameSessionInclude} from '@/types/game';
import {getPrisma} from '../database';

export function getGameSessionById(id: string) {
	return getPrisma().gameSession.findUnique({
		where: {
			id,
		},
		include: gameSessionInclude,
	});
}

export function getGameSessionsByUserId(userId: string) {
	return getPrisma().gameSession.findMany({
		where: {
			user_id: userId,
		},
		orderBy: {
			created_at: 'desc',
		},
		include: gameSessionInclude,
	});
}

export function createGameSession(userId: string, gameType: GameType, matchId?: string | null) {
	return getPrisma().gameSession.create({
		data: {
			user_id: userId,
			match_id: matchId ?? null,
			game_type: gameType,
		},
	});
}

export function deleteGameSession(id: string) {
	return getPrisma().gameSession.delete({
		where: {
			id,
		},
	});
}
