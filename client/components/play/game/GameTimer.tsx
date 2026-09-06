import {PlayerStatus} from '@/client/shared/match/types';
import {GameContext, getGameLink} from '@/components/play/game/Game';
import onSolve from '@/components/play/helpers/on-solve';
import Match, {MatchContext} from '@/components/play/match/Match';
import {TimerProps} from '@/components/timer/@types/interfaces';
import Timer from '@/components/timer/Timer';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {useMe} from '@/util/hooks/useMe';
import React, {ReactNode, useContext} from 'react';

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
	const visual3Param = visual3?.(context);

	const playerStatus = getPlayerStatusInfo(
		me.id,
		timeIndex,
		solves,
		matchContext?.match ?? undefined,
	);

	async function timerOnSolve(solve, match?: any) {
		return onSolve(solve, context, match);
	}

	const disabled = playerStatus.status === PlayerStatus.Lost;

	const timerParams: TimerProps = {
		scramble: disabled ? ' ' : scramble,
		scrambleLocked: true,
		inDialog: true,
		disabled,
		ignorePbEvents: true,
		solvesFilter: {
			game_session_id: context.sessionId || undefined,
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
				linkCode={linkCode || ''}
				matchType={gameType}
				cubeType={cubeType}
				minPlayers={2}
				maxPlayers={2}
			/>
		);
	} else if (showTimer) {
		const timer: ReactNode = <Timer {...timerParams} />;

		return (
			<Dialog
				open={showTimer}
				onOpenChange={(open) => {
					if (!open) closeTimer();
				}}
			>
				<DialogContent fullSize overflowHidden>
					<DialogTitle className="sr-only">Timer</DialogTitle>
					{timer}
				</DialogContent>
			</Dialog>
		);
	} else {
		return null;
	}
}
