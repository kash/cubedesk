import {getLobbyRoomName} from '../../match';
import {MatchRoom} from '../../../../client/shared/match/events';
import {getClientIdsInRoom} from '../../util';
import {MatchLobby} from '../../../schemas/MatchLobby.schema';
import {GameType} from '../../../../shared/match/consts';

const MIN_ELO_DIFF = 100;
const MAX_TIME_IN_LOBBY_MS = 5 * 60 * 1000;
const MAX_ELO_DIFF = 900;

export async function getPlayerPairsByGameType(gameType: GameType, matchLobby: MatchLobby[]) {
	const now = new Date();

	const recsByElo = sortMatchLobbyRecords(matchLobby, 'elo');
	const recsByWait = sortMatchLobbyRecords(matchLobby, 'created_at');

	const playerPairs: [MatchLobby, MatchLobby][] = [];
	const lobbyRoomName = getLobbyRoomName(gameType, MatchRoom.LOBBY);

	const clientsInLobbyIds = await getClientIdsInRoom(lobbyRoomName);
	const processedUserIds: Record<string, MatchLobby> = {};

	for (const rec of recsByWait) {
		const recElo = rec.elo;

		if (processedUserIds[rec.user_id]) {
			continue;
		}

		// Client has been in lobby for too long
		const msInLobby = now.getTime() - rec.created_at.getTime();
		if (msInLobby > MAX_TIME_IN_LOBBY_MS) {
			processedUserIds[rec.user_id] = rec;
			continue;
		}

		const eloDiff = getMaxEloDiff(now, rec.created_at);

		const lowerEloBound = recElo - eloDiff;
		const upperEloBound = recElo + eloDiff;

		const lowerIndex = findLobbyRecordIndexWithTargetElo(recsByElo, lowerEloBound).min;
		const upperIndex = findLobbyRecordIndexWithTargetElo(recsByElo, upperEloBound).max;

		const eloCandidates = recsByElo.slice(lowerIndex, upperIndex);

		eloCandidates.sort((a, b) => {
			const eloWaitOffset = (p) => {
				return Math.min(10, Math.abs(now.getTime() - p.created_at.getTime()) / 1000);
			};

			// We subtract 1 second, up to 10 seconds from elo when sorting so that they get prioritized
			const aDiff = Math.abs(a.elo - recElo) - eloWaitOffset(a);
			const bDiff = Math.abs(b.elo - recElo) - eloWaitOffset(b);

			return aDiff - bDiff;
		});

		let pairedUser = null;
		for (let i = 0; i < eloCandidates.length; i += 1) {
			const candidate = eloCandidates[i];
			if (candidate.user_id === rec.user_id || processedUserIds[candidate.user_id]) {
				continue;
			}
			if (clientsInLobbyIds.has(candidate.client_id)) {
				pairedUser = candidate;
				break;
			} else {
				// Remove from lobby if client is not in lobby anymore
				processedUserIds[candidate.user_id] = candidate;
			}
		}

		if (pairedUser) {
			playerPairs.push([rec, pairedUser]);
			processedUserIds[rec.user_id] = rec;
			processedUserIds[pairedUser.user_id] = pairedUser;
		}
	}

	return {
		remove: Object.values(processedUserIds),
		pair: playerPairs,
	};
}

function sortMatchLobbyRecords(matchLobby: MatchLobby[], orderBy: string) {
	return [...matchLobby].sort((a, b) => a[orderBy] - b[orderBy]);
}

function findLobbyRecordIndexWithTargetElo(recsByElo: MatchLobby[], targetElo: number) {
	let min = 0;
	let max = recsByElo.length;

	while (min < max) {
		const midIndex = Math.floor((min + max) / 2);
		const midRec = recsByElo[midIndex];
		if (midRec.elo > targetElo) {
			max = midIndex;
		} else {
			min = midIndex + 1;
		}
	}

	return {
		min,
		max,
	};
}

function getMaxEloDiff(now: Date, createdAt: Date) {
	const diffSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

	// Looks weird, but it works. The math's been worked out
	const diff = MIN_ELO_DIFF + Math.pow(diffSeconds, 2.1);
	return Math.min(MAX_ELO_DIFF, diff);
}
