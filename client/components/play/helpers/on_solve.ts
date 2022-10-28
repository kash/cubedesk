import {gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import {snakifyObject} from '../../../util/strings/snakify';
import {IGameContext} from '../game/Game';
import {PlayerStatus} from '../../../shared/match/types';
import {GameSession, Match} from '../../../@types/generated/graphql';
import {SOLVE_FRAGMENT} from '../../../util/graphql/fragments';
import {Solve} from '../../../../server/schemas/Solve.schema';

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

		return new Promise((resolve) => {
			const query = gql`
				mutation Mutate($gameType: GameType, $matchId: String) {
					createGameSession(gameType: $gameType, matchId: $matchId) {
						id
					}
				}
			`;

			gqlMutate<{createGameSession: GameSession}>(query, {
				gameType,
				matchId: match?.id || null,
			}).then((res) => {
				const gameSession = res.data.createGameSession;

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

		const data = await gqlMutate<{createSolve: Solve}>(query, {
			input: {
				...snakifyObject(solve),
				game_session_id: gameSessionId,
			},
		});

		return data.data.createSolve;
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
