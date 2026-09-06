import {EloRating} from '@/types/elo';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {Lightning} from 'phosphor-react';
import React from 'react';

interface Props {
	eloRating: EloRating;
}

export default function ProfileElo(props: Props) {
	const {eloRating} = props;

	const cubeTypes = ['222', '333', '444'];
	const eloBlocks: React.ReactNode[] = [];

	for (const ct of cubeTypes) {
		if (!eloRating[`games_${ct}_count`]) {
			continue;
		}

		const gameCount = eloRating[`games_${ct}_count`];
		const eloNum = eloRating[`elo_${ct}_rating`];
		const ctInfo = getCubeTypeInfoById(ct);
		eloBlocks.push(
			<div
				key={ct}
				className="border-tmo-module/10 bg-module text-text flex flex-col items-start rounded-xl border p-4"
			>
				<span className="text-text/50 text-xs font-medium">{ctInfo?.name ?? ct}</span>
				<span className="mt-2 text-3xl font-semibold tabular-nums">{eloNum}</span>
				<span className="text-text/40 mt-1 text-xs">
					{gameCount} game{gameCount === 1 ? '' : 's'}
				</span>
			</div>,
		);
	}

	if (!eloBlocks.length) return null;

	return (
		<div className="">
			<h2 className="mb-0 flex items-center gap-2 text-lg font-semibold tracking-tight">
				<Lightning size={20} className="text-text/50" />
				ELO ratings
			</h2>
			<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">{eloBlocks}</div>
		</div>
	);
}
