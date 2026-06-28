import React, {ReactNode, useContext, useEffect} from 'react';
import {setExistingMatchData} from '@/components/play/match/events/helpers';
import {toastError} from '@/util/toast';
import {listenForJoinEvents} from '@/components/play/match/events/join-match';
import {listenForConnectEvent} from '@/components/play/match/events/reconnect';
import {listenForTimerEvents} from '@/components/play/match/events/timer';
import {relayOpponentEvents} from '@/components/play/match/events/opponent';
import {MatchContext} from '@/components/play/match/Match';
import {handleOpenMatchLink} from '@/components/play/match/events/open-match';
import {listenForMatchUpdates} from '@/components/play/match/events/update';
import {GameContext} from '@/components/play/game/Game';
import {useMe} from '@/util/hooks/useMe';
import {getHashCode} from '@/util/strings/util';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import {listenForMatchWarnings} from '@/components/play/match/events/warnings';

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
