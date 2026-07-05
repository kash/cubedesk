import {Solve} from '@/types/solve';
import {getMatchById} from '@/server/models/match';
import {SocketClient} from '@/server/match/init';
import {MatchCacher} from '@/server/match/update/match_cacher';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdate} from '@/server/match/update/standings';
import {getDetailedClientInfo} from '@/server/match/util';

export function listenForSolveEvents(client: SocketClient) {
	// Player starts timer
	client.on('playerStartedSolve', async (matchId, startedAt) => {
		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const matchCacher = new MatchCacher(match.id);
		await matchCacher.setPlayerSolving(user.id, true);

		emitMatchUpdate('opponentStartedSolve', match, user, startedAt);
	});

	// Player stops timer
	client.on('playerEndedSolve', async (matchId, endedAtUnix, finalTimeMillis) => {
		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const matchCacher = new MatchCacher(match.id);
		await matchCacher.setPlayerSolving(user.id, false);

		emitMatchUpdate('opponentEndedSolve', match, user, endedAtUnix, finalTimeMillis);
	});

	// Player finishes solve
	client.on('playerSolveSaved', async (matchId, solve) => {
		if (!matchId) {
			return;
		}

		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const matchCacher = new MatchCacher(match.id);
		await matchCacher.updatePlayerLastSolveAt(user.id, new Date());

		emitMatchUpdate('opponentSolveSaved', match, user, solve);

		await sendMatchUpdate(match);
	});

	// Player DNFs solve
	client.on('playedDnfSolve', async (matchId, solve) => {
		await updateSolve(solve, matchId);
	});

	// Player +2 solve
	client.on('playerPlusTwoSolve', async (matchId, solve) => {
		await updateSolve(solve, matchId);
	});

	async function updateSolve(solve: Solve, matchId: string) {
		if (!matchId) {
			return;
		}

		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);

		if (!match) {
			return;
		}

		emitMatchUpdate('opponentSolveUpdated', match, user, solve);
		await sendMatchUpdate(match);
	}
}
