import React, {ReactNode, useContext, useEffect} from 'react';
import {setExistingMatchData} from './events/helpers';
import {toastError} from '../../../util/toast';
import {listenForJoinEvents} from './events/join_match';
import {listenForConnectEvent} from './events/reconnect';
import {listenForTimerEvents} from './events/timer';
import {relayOpponentEvents} from './events/opponent';
import {MatchContext} from './Match';
import {handleOpenMatchLink} from './events/open_match';
import {listenForMatchUpdates} from './events/update';
import {GameContext} from '../game/Game';
import {useMe} from '../../../util/hooks/useMe';
import {getHashCode} from '../../../util/strings/util';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import {getNewScramble} from '../../timer/helpers/scramble';
import {listenForMatchWarnings} from './events/warnings';

interface Props {
	children: ReactNode;
}

export default function Listeners(props: Props) {
	const me = useMe();
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const {solveIndex, matchLoaded, setScramble, match, cubeType} = matchContext;

	useEffect(() => {
		setScramble(getScramble());
	}, [solveIndex, match]);

	function getScramble() {
		let seed = null;

		if (match) {
			seed = getHashCode(match.id) + solveIndex;
		}

		const ct = getCubeTypeInfoById(cubeType);
		return getNewScramble(ct.scramble, seed);
	}

	handleOpenMatchLink();
	relayOpponentEvents();
	listenForMatchUpdates();
	listenForTimerEvents();
	listenForMatchWarnings();
	listenForConnectEvent();
	listenForJoinEvents();

	setExistingMatchData(me, gameContext, matchContext).catch(() => toastError('Invalid match link'));

	matchLoaded.current = true;

	return <>{props.children}</>;
}
