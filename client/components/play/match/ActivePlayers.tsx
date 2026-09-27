import {SocketConst} from '@/client/shared/socket_costs';
import {GameType} from '@/shared/match/consts';
import {socketClient} from '@/util/socket/socketio';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';

interface Props {
	matchType: GameType;
}

export default function ActivePlayers(props: Props) {
	const {t} = useTranslation();
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
		return t('community.players', {count: c});
	}

	function startWatching() {
		socketClient().emit(SocketConst.WATCH_ROOM_SIZES);
	}

	function stopWatching() {
		socketClient().emit(SocketConst.STOP_WATCHING_ROOM_SIZES);
	}

	let body;
	if (loaded) {
		body = t('community.inLobbyInAMatch', {
			queue: getPlayerName(playersInQueue),
			match: getPlayerName(playersInMatch),
		});
	} else {
		return null;
	}

	return (
		<div className="mt-1 w-full text-center">
			<p>{body}</p>
		</div>
	);
}
