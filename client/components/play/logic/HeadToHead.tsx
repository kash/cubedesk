import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import Game from '@/components/play/game/Game';
import MatchModule from '@/components/play/target/MatchModule';
import TargetTimes from '@/components/play/target/TargetTimes';
import {getHeadToHeadPlayerStatusInfo, getHeadToHeadSolveRowInfo} from '@/shared/game-logic/head-to-head';
import React from 'react';
import {GameType} from '../../../../shared/match/consts';

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
