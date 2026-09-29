import Elimination from '@/components/play/logic/Elimination';
import HeadToHead from '@/components/play/logic/HeadToHead';
import {GameType} from '@/shared/match/consts';
import {Lightning, Sword} from 'phosphor-react';
import React from 'react';

export interface GameMetaData {
	id: string;
	icon: React.ReactElement;
	descriptionKey: string;
	nameKey: string;
	color: string;
}

const gameTypeData: Record<GameType, GameMetaData> = {
	[GameType.HEAD_TO_HEAD]: {
		id: 'head-to-head',
		icon: <Lightning weight="fill" />,
		descriptionKey: 'community.headToHead.description',
		nameKey: 'common.value1v1',
		color: '#ff9800',
	},
	[GameType.ELIMINATION]: {
		id: 'elimination',
		icon: <Sword weight="fill" />,
		descriptionKey: 'community.elimination.description',
		nameKey: 'community.elimination',
		color: '#42a5f5',
	},
};

export function getGameMetaData(gameType: GameType) {
	return gameTypeData[gameType];
}

export default function Play() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
		<div className="border-tmo-module/10 bg-tmo-module/[0.025] rounded-2xl border p-6 sm:p-7">
			{props.children}
		</div>
	);
}
