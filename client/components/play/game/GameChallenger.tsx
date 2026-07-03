import ActivePlayers from '@/components/play/match/ActivePlayers';
import React, {useContext} from 'react';
import {GameContext} from '@/components/play/game/Game';
import {openModal} from '@/actions/general';
import MatchPopup from '@/components/play/match/match-popup/MatchPopup';
import {useDispatch} from 'react-redux';
import {getGameMetaData} from '@/components/play/Play';
import Button from '@/components/common/Button';
import {socketClient} from '@/util/socket/socketio';

export default function GameChallenger() {
	const dispatch = useDispatch();
	const {gameType, multiplayerOnly, multiplayer} = useContext(GameContext);
	const gameTypeData = getGameMetaData(gameType);

	if (!multiplayer) {
		return null;
	}

	const minPlayers = 2;
	const maxPlayers = 2;

	function openMatch(joinLobby: boolean) {
		dispatch(
			openModal(
				<MatchPopup
					cubeType="333"
					joinLobby={joinLobby}
					minPlayers={minPlayers}
					maxPlayers={maxPlayers}
					matchType={gameType}
				/>,
				{
					title: `Play ${gameTypeData.name}`,
					onClose: () => {
						socketClient().emit('playerLeftLobby');
					},
				},
			),
		);
	}

	let joinLobbyButton: React.ReactNode = null;
	const challengeButton = (
		<Button flat primary text="Challenge" large fullWidth onClick={() => openMatch(false)} />
	);

	// Custom styling on plain button when multiplayer only
	if (multiplayerOnly) {
		joinLobbyButton = (
			<Button primary large fullWidth text="Join Lobby" onClick={() => openMatch(true)} />
		);
	}

	return (
		<div className="flex w-full flex-col justify-center gap-3">
			{joinLobbyButton}
			{challengeButton}
			<ActivePlayers matchType={gameType as any} />
		</div>
	);
}
