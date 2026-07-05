import Button from '@/components/common/Button';
import {socketClient} from '@/util/socket/socketio';
import {UsersThree} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {GameType} from '../../../../../shared/match/consts';

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
		<div className="flex items-center justify-center">
			<div className="text-text box-border flex flex-col items-center px-0 pt-[30px] pb-2.5">
				<UsersThree className="mb-[5px] text-[1.2rem]" weight="fill" />
				<p className="mb-5">Looking for players{dots}</p>
				<Button text="Cancel" onClick={cancelSearch} />
			</div>
		</div>
	);
}
