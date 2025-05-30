import Modal from '@/components/common/modal/Modal';
import Timer from '@/components/timer/Timer';
import React, {ReactNode, useContext, useCallback} from 'react';
import onSolve from '@/components/play/helpers/on_solve';
import {GameContext, getGameLink} from '../Game';
import Match, {MatchContext} from '@/components/play/match/Match';
import {TimerProps} from '@/components/timer/@types/interfaces';
import {PlayerStatus} from '@/lib/shared/match/types';
import {Match as MatchSchema} from '@/generated/zod';
import {useMe} from '@/lib/util/hooks/useMe';

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

	const updateSolves = useCallback((solves) => {
		setSolves(solves);
	}, [setSolves]);

	const visual1Param = visual1;
	const visual2Param = visual2;
	const visual3Param = visual3(context);

	const playerStatus = getPlayerStatusInfo(me.id, timeIndex, solves, matchContext?.match);

	const timerOnSolve = useCallback(async (solve, match?: MatchSchema) => {
		return onSolve(solve, context, match);
	}, [context]);

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
