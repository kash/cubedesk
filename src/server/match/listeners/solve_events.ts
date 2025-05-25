import {getDetailedClientInfo} from '../util';
import {getMatchById} from '../../models/match';
import {sendMatchUpdate} from '../update/standings';
import {emitMatchUpdate} from '../update/send';
import {Solve} from '../../schemas/Solve.schema';
import {SocketClient} from '../init';
import {MatchCacher} from '../update/match_cacher';

export function listenForSolveEvents(client: SocketClient) {
	// Player starts timer
	client.on('playerStartedSolve', async (matchId, startedAt) => {
		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);

		const matchCacher = new MatchCacher(match.id);
		await matchCacher.setPlayerSolving(user.id, true);

		emitMatchUpdate('opponentStartedSolve', match, user, startedAt);
	});

	// Player stops timer
	client.on('playerEndedSolve', async (matchId, endedAtUnix, finalTimeMillis) => {
		const {user} = await getDetailedClientInfo(client);
		const match = await getMatchById(matchId);

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
		const matchCacher = new MatchCacher(match.id);
		await matchCacher.updatePlayerLastSolveAt(user.id, new Date());

		if (!match) {
			return;
		}

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
