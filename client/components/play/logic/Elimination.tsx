import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import Game from '@/components/play/game/Game';
import TargetStatus from '@/components/play/target/TargetStatus';
import TargetTimes from '@/components/play/target/TargetTimes';
import {getEliminationPlayerStatus, getEliminationSolveRowInfo} from '@/client/shared/game-logic/elimination';
import React from 'react';
import {GameType} from '@/shared/match/consts';

export default function Elimination() {
	return (
		<Game
			loaded
			multiplayer
			defaultCubeType="333"
			getSolveRowInfo={getEliminationSolveRowInfo}
			getPlayerStatusInfo={getEliminationPlayerStatus}
			gameType={GameType.ELIMINATION}
			visual1={<TargetTimes reverse />}
			visual2={<TargetStatus />}
			visual3={(context) => <ScrambleVisual scramble={context.scramble} cubeType={context.cubeType} />}
		/>
	);
}
