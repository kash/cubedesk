import {GameContext} from '@/components/play/game/Game';
import {setExistingMatchData} from '@/components/play/match/events/helpers';
import {listenForJoinEvents} from '@/components/play/match/events/join-match';
import {handleOpenMatchLink} from '@/components/play/match/events/open-match';
import {relayOpponentEvents} from '@/components/play/match/events/opponent';
import {listenForConnectEvent} from '@/components/play/match/events/reconnect';
import {listenForTimerEvents} from '@/components/play/match/events/timer';
import {listenForMatchUpdates} from '@/components/play/match/events/update';
import {listenForMatchWarnings} from '@/components/play/match/events/warnings';
import {useMatchContext} from '@/components/play/match/Match';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {getHashCode} from '@/util/strings/util';
import {toastError} from '@/util/toast';
import React, {ReactNode, useContext, useEffect} from 'react';

interface Props {
	children: ReactNode;
}

export default function Listeners(props: Props) {
	const me = useMe();
	const gameContext = useContext(GameContext);
	const matchContext = useMatchContext();
	const {solveIndex, matchLoaded, setScramble, match, cubeType} = matchContext;

	useEffect(() => {
		setScramble(getScramble());
	}, [solveIndex, match]);

	function getScramble() {
		let seed: number | undefined;

		if (match) {
			seed = getHashCode(match.id) + solveIndex;
		}

		const ct = getCubeTypeInfoById(cubeType);
		return getNewScramble(ct?.scramble ?? cubeType, seed);
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
