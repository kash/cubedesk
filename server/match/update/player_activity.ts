import {MatchCacher} from './match_cacher';
import {emitMatchUpdate} from './send';
import {resignMatch} from './resign';
import {getMatchById} from '../../models/match';
import {MatchCache, MatchPlayerCache} from '../../../client/shared/match/types';

// If at 80% of the time, we send a warning. Round down to the nearest 5 seconds.
const MAX_INACTIVITY_BEFORE_SOLVE_STARTS_MS = 90000;
const MAX_SOLVE_TIME_BEFORE_FORFEIT_MS = 120000;

interface ForfeitCheckResult {
	warning: boolean;
	forfeit: boolean;
}

export class PlayerActivity {
	matchId: string;

	constructor(matchId: string) {
		this.matchId = matchId;
	}

	async processConditionsForMatchForfeit() {
		const matchCacher = new MatchCacher(this.matchId);
		const cachedRes = await matchCacher.fetchFromCache();

		if (!matchCacher || cachedRes.basicMatch.ended_at) {
			return;
		}

		for (const player of cachedRes.players) {
			try {
				const maxSolveTimeRes = this.checkForMaxSolveTime(cachedRes, player);
				const maxInactiveRes = this.checkForMaxInactivityBeforeSolve(cachedRes, player);

				if (maxSolveTimeRes?.forfeit || maxInactiveRes?.forfeit) {
					emitMatchUpdate('opponentForfeitedMatch', cachedRes.basicMatch, player.user);
					const match = await getMatchById(this.matchId);
					if (match.ended_at) {
						break;
					}
					await resignMatch(match, player.user, true);
					break;
				} else if (maxSolveTimeRes?.warning || maxInactiveRes?.warning) {
					await matchCacher.setForfeitWarningSent(player.userId, true);
				}
			} catch (e) {
				console.error(e);
			}
		}
	}

	private checkForMaxSolveTime(matchCache: MatchCache, player: MatchPlayerCache): ForfeitCheckResult {
		const {solving} = player;

		if (!player.solveStartedAt || !solving) {
			return;
		}

		const solveStartedAt = new Date(player.solveStartedAt);

		const maxSolveWarningTime = this.getWarningTime(MAX_SOLVE_TIME_BEFORE_FORFEIT_MS);
		const msSinceStartingSolve = Date.now() - solveStartedAt.getTime();
		if (solving && msSinceStartingSolve > MAX_SOLVE_TIME_BEFORE_FORFEIT_MS) {
			return {
				warning: false,
				forfeit: true,
			};
		} else if (solving && msSinceStartingSolve > maxSolveWarningTime) {
			if (player.forfeitWarningSent) {
				return {
					warning: true,
					forfeit: false,
				};
			}

			const timeLeft = MAX_SOLVE_TIME_BEFORE_FORFEIT_MS - maxSolveWarningTime;
			const timeLeftSeconds = this.getDisplayWarningSeconds(timeLeft);
			emitMatchUpdate('solveTakingTooLongWarning', matchCache.basicMatch, player.user, timeLeftSeconds);

			return {
				warning: true,
				forfeit: false,
			};
		}
	}

	private checkForMaxInactivityBeforeSolve(matchCache: MatchCache, player: MatchPlayerCache): ForfeitCheckResult {
		const {solving} = player;

		if (solving || !this.hasLowestSolveCount(matchCache, player)) {
			return;
		}

		// TODO if no solves yet, abort game after a certain amount of time
		const lastSolveAt = player.lastSolveAt
			? new Date(player.lastSolveAt)
			: new Date(matchCache.basicMatch.created_at);

		const inactiveWarningTime = this.getWarningTime(MAX_INACTIVITY_BEFORE_SOLVE_STARTS_MS);
		const msSinceLastSolve = Date.now() - lastSolveAt.getTime();

		// TODO all users should not get the warning. If both at same number of solves, just wait.
		// TODO if both at same number of solves and no one does anything, resign after a long time (10 min)
		if (!solving && msSinceLastSolve > MAX_INACTIVITY_BEFORE_SOLVE_STARTS_MS) {
			return {
				warning: false,
				forfeit: true,
			};
		} else if (!solving && msSinceLastSolve > inactiveWarningTime) {
			if (player.forfeitWarningSent) {
				return {
					warning: true,
					forfeit: false,
				};
			}

			const timeLeft = MAX_INACTIVITY_BEFORE_SOLVE_STARTS_MS - inactiveWarningTime;
			const timeLeftSeconds = this.getDisplayWarningSeconds(timeLeft);
			emitMatchUpdate('inactivityBeforeSolveStartsWarning', matchCache.basicMatch, player.user, timeLeftSeconds);

			return {
				warning: true,
				forfeit: false,
			};
		}
	}

	private hasLowestSolveCount(matchCache: MatchCache, player: MatchPlayerCache) {
		const players = matchCache.players;

		let lowestSolveCount = Infinity;
		let highestSolveCount = 0;

		for (const player of players) {
			if (player.solveCount < lowestSolveCount) {
				lowestSolveCount = player.solveCount;
			}
			if (player.solveCount > highestSolveCount) {
				highestSolveCount = player.solveCount;
			}
		}

		if (lowestSolveCount === highestSolveCount) {
			return false;
		}

		const playerSolveCount = player.solveCount + (player.solving ? 1 : 0);
		return playerSolveCount <= lowestSolveCount;
	}

	private getWarningTime(timeMs: number) {
		return timeMs * 0.75;
	}

	private getDisplayWarningSeconds(msLeft: number) {
		return Math.floor(Math.floor(msLeft / 1000) / 5) * 5;
	}
}
