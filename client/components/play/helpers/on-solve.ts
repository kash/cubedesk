import {snakifyObject} from '@/util/strings/snakify';
import {IGameContext} from '@/components/play/game/Game';
import {PlayerStatus} from '@/shared/match/types';
import {trpc} from '@/util/trpc';
import {Solve} from '@/types/solve';

export default async function onSolve(solve: Solve, context: IGameContext, match?: any) {
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

		const gameSession = await trpc.game.createSession.mutate({
			gameType,
			matchId: match?.id || null,
		});

		if (!gameSession?.id) {
			throw new Error('Failed to create game session');
		}

		setSessionId(gameSession.id);
		return gameSession.id;
	}

	async function addTimeToHistory(solve) {
		let gameSessionId = sessionId;
		if (!gameSessionId) {
			gameSessionId = await getSessionId();
		}

		const newSolve = await trpc.solve.create.mutate({
			...snakifyObject(solve),
			game_session_id: gameSessionId,
		});

		if (!newSolve) {
			throw new Error('Failed to create solve');
		}

		return newSolve as unknown as Solve;
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
