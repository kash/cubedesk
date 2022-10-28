import ActivePlayers from '../../match/active_players/ActivePlayers';
import React, {useContext} from 'react';
import {GameContext} from '../Game';
import block from '../../../../styles/bem';
import {openModal} from '../../../../actions/general';
import MatchPopup from '../../match/match_popup/MatchPopup';
import {useDispatch} from 'react-redux';
import {getGameMetaData} from '../../Play';
import Button from '../../../common/button/Button';
import {socketClient} from '../../../../util/socket/socketio';

const b = block('games-intro-challenge');

export default function GameChallenger() {
	const dispatch = useDispatch();
	const {gameType, multiplayerOnly, multiplayer} = useContext(GameContext);
	const gameTypeData = getGameMetaData(gameType);

	if (!multiplayer) {
		return null;
	}

	const minPlayers = 2;
	const maxPlayers = 2;

	function openMatch() {
		dispatch(
			openModal(
				<MatchPopup cubeType="333" minPlayers={minPlayers} maxPlayers={maxPlayers} matchType={gameType} />,
				{
					title: `Play ${gameTypeData.name}`,
					onClose: () => {
						socketClient().emit('playerLeftLobby');
					},
				}
			)
		);
	}

	let button = <Button secondary text="Challenge" large fullWidth className={b()} onClick={openMatch} />;

	// Custom styling on plain button when multiplayer only
	if (multiplayerOnly) {
		button = <Button primary large fullWidth text="Challenge" className={b()} onClick={openMatch} />;
	}

	return (
		<div className={b()}>
			{button}
			<ActivePlayers matchType={gameType} />
		</div>
	);
}
