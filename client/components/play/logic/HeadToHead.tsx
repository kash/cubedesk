import React from 'react';
import TargetTimes from '../target/target_times/TargetTimes';
import Game from '../game/Game';
import {getHeadToHeadPlayerStatusInfo, getHeadToHeadSolveRowInfo} from '../../../shared/game_logic/heat_to_head';
import ScrambleVisual from '../../modules/scramble/ScrambleVisual';
import {GameType} from '../../../../shared/match/consts';
import MatchModule from '../target/match_module/MatchModule';

export default function HeadToHead() {
	return (
		<Game
			loaded
			multiplayer
			multiplayerOnly
			defaultCubeType="333"
			getSolveRowInfo={getHeadToHeadSolveRowInfo}
			getPlayerStatusInfo={getHeadToHeadPlayerStatusInfo}
			gameType={GameType.HEAD_TO_HEAD}
			visual1={<TargetTimes reverse />}
			visual2={<MatchModule />}
			visual3={(context) => <ScrambleVisual scramble={context.scramble} cubeType={context.cubeType} />}
		/>
	);
}
