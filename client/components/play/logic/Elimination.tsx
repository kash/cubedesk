import React from 'react';
import TargetTimes from '../target/target_times/TargetTimes';
import TargetStatus from '../target/target_status/TargetStatus';
import Game from '../game/Game';
import {getEliminationPlayerStatus, getEliminationSolveRowInfo} from '../../../shared/game_logic/elimination';
import ScrambleVisual from '../../modules/scramble/ScrambleVisual';
import {GameType} from '../../../../shared/match/consts';

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
