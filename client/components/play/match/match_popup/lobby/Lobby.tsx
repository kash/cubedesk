import React, {useEffect, useState} from 'react';
import './Lobby.scss';
import {UsersThree} from '@phosphor-icons/react';
import block from '../../../../../styles/bem';
import {socketClient} from '../../../../../util/socket/socketio';
import Button from '../../../../common/button/Button';
import {GameType} from '../../../../../../shared/match/consts';

const b = block('match-join-lobby');

interface Props {
	matchType: GameType;
	onCancel: () => void;
}

export default function Lobby(props: Props) {
	const {onCancel} = props;
	const [updatedDots, setUpdatedDots] = useState(3);

	useEffect(() => {
		socketClient().emit('playerJoinedLobby', {
			cube_type: '333',
			game_type: GameType.HEAD_TO_HEAD,
		});

		let interval;
		setTimeout(() => {
			interval = setInterval(() => {
				setUpdatedDots((updatedDots) => updatedDots + 1);
			}, 400);
		}, 700);

		return () => clearInterval(interval);
	}, []);

	function cancelSearch() {
		socketClient().emit('playerLeftLobby');
		onCancel();
	}

	let dots = '';
	for (let i = 0; i < Math.floor(updatedDots % 4); i++) {
		dots += '.';
	}

	return (
		<div className={b()}>
			<div className={b('body')}>
				<UsersThree weight="fill" />
				<p>Looking for players{dots}</p>
				<Button text="Cancel" onClick={cancelSearch} />
			</div>
		</div>
	);
}
