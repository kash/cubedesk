import React from 'react';
import './Play.scss';
import block from '../../styles/bem';
import {GameType} from '../../../shared/match/consts';
import HeadToHead from './logic/HeadToHead';
import Elimination from './logic/Elimination';

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
		icon: 'ph-lightning-fill',
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
		<div className="mx-auto flex flex-row items-center justify-center">
			<div className="mx-auto flex flex-row flex-wrap gap-3">
				<PlayRow>
					<HeadToHead />
				</PlayRow>
				<PlayRow>
					<Elimination />
				</PlayRow>
			</div>
		</div>
	);
}

interface PlayRowProps {
	children: React.ReactNode;
}

function PlayRow(props: PlayRowProps) {
	return (
		<div className="w-full max-w-md rounded-lg border-4 border-solid border-slate-300/10 p-5">{props.children}</div>
	);
}
