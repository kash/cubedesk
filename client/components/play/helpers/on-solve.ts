import {gql} from '@apollo/client';
import {gqlMutate} from '@/components/api';
import {snakifyObject} from '@/util/strings/snakify';
import {IGameContext} from '@/components/play/game/Game';
import {PlayerStatus} from '@/shared/match/types';
import {SOLVE_FRAGMENT} from '@/util/graphql/fragments';
import {Solve} from '../../../../server/schemas/Solve.schema';

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

		return new Promise((resolve) => {
			const query = gql`
				mutation Mutate($gameType: GameType, $matchId: String) {
					createGameSession(gameType: $gameType, matchId: $matchId) {
						id
					}
				}
			`;

			gqlMutate<any>(query, {
				gameType,
				matchId: match?.id || null,
			}).then((res) => {
				const gameSession = res.data?.createGameSession;

				if (!gameSession?.id) {
					throw new Error('Failed to create game session');
				}

				setSessionId(gameSession.id);
				resolve(gameSession.id);
			});
		});
	}

	async function addTimeToHistory(solve) {
		const query = gql`
			${SOLVE_FRAGMENT}

			mutation Mutate($input: SolveInput) {
				createSolve(input: $input) {
					...SolveFragment
				}
			}
		`;

		let gameSessionId = sessionId;
		if (!gameSessionId) {
			gameSessionId = await getSessionId();
		}

		const data = await gqlMutate<any>(query, {
			input: {
				...snakifyObject(solve),
				game_session_id: gameSessionId,
			},
		});

		const newSolve = data.data?.createSolve;

		if (!newSolve) {
			throw new Error('Failed to create solve');
		}

		return newSolve;
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
