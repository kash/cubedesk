import {socketClient} from '../../../../util/socket/socketio';
import {setExistingMatchData} from './helpers';
import {useContext} from 'react';
import {MatchContext} from '../Match';
import {useMe} from '../../../../util/hooks/useMe';
import {GameContext} from '../../game/Game';

export function listenForConnectEvent() {
	const me = useMe();
	const matchContext = useContext(MatchContext);
	const gameContext = useContext(GameContext);
	const {matchLoaded} = matchContext;

	function onConnect() {
		setExistingMatchData(me, gameContext, matchContext, true);
	}

	if (!matchLoaded.current) {
		socketClient().on('connect', onConnect);
	}
}
