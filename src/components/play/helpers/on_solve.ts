import {snakifyObject} from '@/lib/util/strings/snakify';
import {IGameContext} from '@/components/play/game/Game';
import {PlayerStatus} from '@/lib/shared/match/types';
import {GameSession, Match} from '@/generated/zod';
import {Solve} from '@/generated/zod';
import {api} from '@/trpc/react';

export default async function onSolve(solve: Solve, context: IGameContext, match?: Match) {
	const {
		sessionId,
		gameType,
		setSessionId,
		solves,
		setSolves,
		timeIndex,
		getSolveRowInfo,
		setTimeIndex,
		updateScramble,
	} = context;

	const solveInfo = getSolveRowInfo(solve.user_id, timeIndex, [...solves, solve], match);

	async function getSessionId(): Promise<string> {
		if (sessionId) {
			return sessionId;
		}

		// TODO: Migrate to tRPC - need game.createGameSession mutation
		// const createGameSessionMutation = api.game.createGameSession.useMutation();
		// const gameSession = await createGameSessionMutation.mutateAsync({
		// 	gameType,
		// 	matchId: match?.id || null,
		// });
		// setSessionId(gameSession.id);
		// return gameSession.id;

		throw new Error('createGameSession mutation not migrated to tRPC');
	}

	async function addTimeToHistory(solve) {
		let gameSessionId = sessionId;
		if (!gameSessionId) {
			gameSessionId = await getSessionId();
		}

		// TODO: Migrate to tRPC - need solve.create mutation
		// const createSolveMutation = api.solve.create.useMutation();
		// const newSolve = await createSolveMutation.mutateAsync({
		// 	input: {
		// 		...snakifyObject(solve),
		// 		game_session_id: gameSessionId,
		// 	},
		// });
		// return newSolve;

		throw new Error('createSolve mutation not migrated to tRPC');
	}

	function nextChallenge() {
		setTimeIndex(timeIndex + 1);
		updateScramble();
	}

	const newSolve = await addTimeToHistory(solve);

	if (solveInfo.solveStatus !== PlayerStatus.Lost) {
		nextChallenge();
	}

	setSolves([...solves, newSolve]);
}