import React, {useEffect, useState} from 'react';
import './ActivePlayers.scss';
import {socketClient} from '../../../../util/socket/socketio';
import {GameType} from '../../../../@types/generated/graphql';
import {SocketConst} from '../../../../shared/socket_costs';

interface Props {
	matchType: GameType;
}

export default function ActivePlayers(props: Props) {
	const {matchType} = props;

	const [loaded, setLoaded] = useState(false);
	const [playersInQueue, setPlayersInQueue] = useState(0);
	const [playersInMatch, setPlayersInMatch] = useState(0);

	useEffect(() => {
		startWatching();

		socketClient().on('roomSizeUpdate', (data) => {
			setLoaded(true);
			setPlayersInQueue(data[matchType]?.lobby || 0);
			setPlayersInMatch(data[matchType]?.match || 0);
		});

		return () => {
			stopWatching();
		};
	}, []);

	function getPlayerName(c) {
		return c + ' ' + (c === 1 ? 'player' : 'players');
	}

	function startWatching() {
		socketClient().emit(SocketConst.WATCH_ROOM_SIZES);
	}

	function stopWatching() {
		socketClient().emit(SocketConst.STOP_WATCHING_ROOM_SIZES);
	}

	let body;
	if (loaded) {
		body = `${getPlayerName(playersInQueue)} in lobby / ${getPlayerName(playersInMatch)} in a match`;
	} else {
		return null;
	}

	return (
		<div className="cd-match__active-users">
			<p>{body}</p>
		</div>
	);
}
