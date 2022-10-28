import React from 'react';
import './Play.scss';
import GameRow from './game_row/GameRow';
import block from '../../styles/bem';
import {GameType} from '../../../shared/match/consts';

const b = block('play');

export interface GameMetaData {
	id: string;
	icon: string;
	description: string;
	name: string;
	color: string;
}

const gameTypeData: Record<GameType, GameMetaData> = {
	[GameType.HEAD_TO_HEAD]: {
		id: 'head-to-head',
		icon: 'ph-users-fill',
		description: 'Go head-to-head with another user. First player to 5 wins',
		name: '1v1',
		color: '#ff9800',
	},
	[GameType.ELIMINATION]: {
		id: 'elimination',
		icon: 'ph-sword-fill',
		description: 'Start with 30 seconds, go 5% faster each solve. How many can you do?',
		name: 'Elimination',
		color: '#42a5f5',
	},
};

export function getGameMetaData(gameType: GameType) {
	return gameTypeData[gameType];
}

export default function Play() {
	return (
		<div className={b()}>
			<div className={b('list')}>
				<GameRow gameType={GameType.HEAD_TO_HEAD} />
				<GameRow gameType={GameType.ELIMINATION} />
			</div>
		</div>
	);
}
