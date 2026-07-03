import {socketClient} from '@/util/socket/socketio';
import {setExistingMatchData} from '@/components/play/match/events/helpers';
import {useContext} from 'react';
import {useMatchContext} from '@/components/play/match/Match';
import {useMe} from '@/util/hooks/useMe';
import {GameContext} from '@/components/play/game/Game';

export function listenForConnectEvent() {
	const me = useMe();
	const matchContext = useMatchContext();
	const gameContext = useContext(GameContext);
	const {matchLoaded} = matchContext;

	function onConnect() {
		setExistingMatchData(me, gameContext, matchContext, true);
	}

	if (!matchLoaded.current) {
		socketClient().on('connect', onConnect);
	}
}
