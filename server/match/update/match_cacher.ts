import {getMatchById} from '../../models/match';
import {MatchCache, MatchPlayerCache} from '../../../client/shared/match/types';
import {
	createRedisKey,
	generatedRedisKey,
	getValueFromRedis,
	RedisNamespace,
	setKeyInRedis,
} from '../../services/redis';
import {MatchParticipant} from '../../schemas/MatchParticipant.schema';
import {logger} from '../../services/logger';
import {Match} from '../../schemas/Match.schema';

export class MatchCacher {
	matchId: string;
	redisKey: generatedRedisKey;

	constructor(matchId: string) {
		this.matchId = matchId;
		this.redisKey = createRedisKey(RedisNamespace.MATCH_CACHE, matchId);
	}

	async fetchFromCache(): Promise<MatchCache> {
		const cachedResult = await getValueFromRedis(this.redisKey);

		if (!cachedResult) {
			const result = await this.constructMatchCacheFromScratch();
			await this.updateCache(result);
			return result;
		} else {
			return JSON.parse(cachedResult);
		}
	}

	async updatePlayerLastSolveAt(userId: string, lastSolveAt: Date) {
		const cachedResult = await this.fetchFromCache();
		const playerIndex = cachedResult.players.findIndex((player) => player.userId === userId);

		if (playerIndex < 0) {
			logger.warn('Player not found in match cache', {
				userId,
			});
			return;
		}

		const currentSolveCount = cachedResult.players[playerIndex].solveCount;
		cachedResult.players[playerIndex].solveCount = currentSolveCount + 1;
		cachedResult.players[playerIndex].solveStartedAt = null;
		cachedResult.players[playerIndex].lastSolveAt = lastSolveAt;
		cachedResult.players[playerIndex].solving = false;

		return this.updateCache(cachedResult);
	}

	async setPlayerSolving(userId: string, solving: boolean) {
		const cachedResult = await this.fetchFromCache();
		const playerIndex = cachedResult.players.findIndex((player) => player.userId === userId);

		if (playerIndex < 0) {
			logger.warn('Player not found in match cache', {
				userId,
			});
			return;
		}

		const solveStartedAt = solving ? new Date() : null;
		cachedResult.players[playerIndex].solveStartedAt = solveStartedAt;
		cachedResult.players[playerIndex].forfeitWarningSent = false;
		cachedResult.players[playerIndex].solving = solving;

		return this.updateCache(cachedResult);
	}

	async setForfeitWarningSent(userId: string, warningSent: boolean) {
		return this.updatePlayerCacheValue(userId, 'forfeitWarningSent', warningSent);
	}

	private async updatePlayerCacheValue<T extends keyof MatchPlayerCache>(
		userId: string,
		key: T,
		value: MatchPlayerCache[T]
	) {
		const cachedResult = await this.fetchFromCache();
		const playerIndex = cachedResult.players.findIndex((player) => player.userId === userId);

		if (playerIndex < 0) {
			logger.warn('Player not found in match cache', {
				userId,
			});
			return;
		}

		cachedResult.players[playerIndex][key] = value;
		return this.updateCache(cachedResult);
	}

	async constructMatchCacheFromScratch(): Promise<MatchCache> {
		const match = await getMatchById(this.matchId);

		const playerCaches = [];
		for (const player of match.participants) {
			const matchPlayerCache = this.constructMatchPlayerCache(player);
			playerCaches.push(matchPlayerCache);
		}

		return {
			matchId: match.id,
			basicMatch: this.getBasicMatchDetails(match),
			players: playerCaches,
		};
	}

	private getBasicMatchDetails(match: Match): Match {
		const newMatch = {...match};

		for (const key of Object.keys(newMatch)) {
			const value = newMatch[key];
			if (typeof value === 'object' && !(value instanceof Date)) {
				delete newMatch[key];
			}
		}

		return newMatch;
	}

	async forceUpdateMatchCache() {
		const cacheMap = await this.constructMatchCacheFromScratch();
		return this.updateCache(cacheMap);
	}

	constructMatchPlayerCache(player: MatchParticipant): MatchPlayerCache {
		const solves = player.solves;

		const playerCreatedAt = player.created_at;
		let lastSolveAt;

		if (!solves || !solves.length) {
			lastSolveAt = playerCreatedAt;
		} else {
			lastSolveAt = solves[solves.length - 1].created_at;
		}

		return {
			userId: player.user_id,
			lastSolveAt,
			user: player.user,
			solveStartedAt: null,
			solving: false,
			forfeitWarningSent: false,
			solveCount: solves ? solves.length : 0,
		};
	}

	async updateCache(resultToCache: MatchCache): Promise<MatchCache> {
		// Expire in 1 hour in seconds
		const expireTime = 60 * 60;
		const resultString = JSON.stringify(resultToCache);
		await setKeyInRedis(this.redisKey, resultString, expireTime);

		return resultToCache;
	}
}
