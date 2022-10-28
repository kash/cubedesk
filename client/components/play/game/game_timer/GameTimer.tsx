import Modal from '../../../common/modal/Modal';
import Timer from '../../../timer/Timer';
import React, {ReactNode, useContext} from 'react';
import onSolve from '../../helpers/on_solve';
import {GameContext, getGameLink} from '../Game';
import Match, {MatchContext} from '../../match/Match';
import {TimerProps} from '../../../timer/@types/interfaces';
import {PlayerStatus} from '../../../../shared/match/types';
import {Match as MatchSchema} from '../../../../@types/generated/graphql';
import {useMe} from '../../../../util/hooks/useMe';

export default function GameTimer() {
	const context = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();

	const {
		cubeType,
		gameType,
		visual1,
		visual2,
		visual3,
		showTimer,
		solves,
		timeIndex,
		getPlayerStatusInfo,
		linkCode,
		closeTimer,
		setSolves,
		matchOpen,
	} = context;

	const scramble = context.scramble || ' ';

	if (!matchOpen && !showTimer) {
		return null;
	}

	function updateSolves(solves) {
		setSolves(solves);
	}

	const visual1Param = visual1;
	const visual2Param = visual2;
	const visual3Param = visual3(context);

	const playerStatus = getPlayerStatusInfo(me.id, timeIndex, solves, matchContext?.match);

	async function timerOnSolve(solve, match?: MatchSchema) {
		return onSolve(solve, context, match);
	}

	const disabled = playerStatus.status === PlayerStatus.Lost;

	const timerParams: TimerProps = {
		scramble: disabled ? ' ' : scramble,
		scrambleLocked: true,
		inModal: true,
		disabled,
		ignorePbEvents: true,
		solvesFilter: {
			game_session_id: context.sessionId,
		},
		onSolve: timerOnSolve,
		cubeType,
		headerOptions: {
			hideSessionSelector: true,
			hideNewSession: true,
			hideCubeType: true,
		},
		timerCustomFooterModules: [
			{
				customBody: () => ({
					module: visual1Param,
				}),
				hideAllOptions: true,
			},
			{
				customBody: () => ({
					module: visual2Param,
				}),
				hideAllOptions: true,
			},
			{
				customBody: () => ({
					module: visual3Param,
				}),
				hideAllOptions: true,
			},
		],
	};

	if (matchOpen) {
		return (
			<Match
				timerParams={timerParams}
				onSolve={timerOnSolve}
				matchPath={getGameLink(gameType)}
				onClose={closeTimer}
				solveIndex={timeIndex}
				updateSolves={updateSolves}
				linkCode={linkCode}
				matchType={gameType}
				cubeType={cubeType}
				minPlayers={2}
				maxPlayers={2}
			/>
		);
	} else if (showTimer) {
		const timer: ReactNode = <Timer {...timerParams} />;

		return (
			<Modal onClose={closeTimer} fullSize overFlowHidden>
				{timer}
			</Modal>
		);
	} else {
		return null;
	}
}
