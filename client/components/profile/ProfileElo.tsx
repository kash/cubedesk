import React from 'react';
import {EloRating} from '@/@types/generated/graphql';
import {getCubeTypeInfoById} from '@/util/cubes/util';

interface Props {
	eloRating: EloRating;
}

export default function ProfileElo(props: Props) {
	const {eloRating} = props;

	const cubeTypes = ['222', '333', '444'];
	const eloBlocks: React.ReactNode[] = [];

	for (const ct of cubeTypes) {
		if (eloRating[`games_${ct}_count`] === 0) {
			continue;
		}

		const gameCount = eloRating[`games_${ct}_count`];
		const eloNum = eloRating[`elo_${ct}_rating`];
		const ctInfo = getCubeTypeInfoById(ct);
		eloBlocks.push(
			<div
				key={ct}
				className="box-border flex flex-col items-start rounded-[10px] border-4 border-tmo-module/10 bg-module p-5 text-text"
			>
				<span className="rounded-[7px] bg-tmo-module/[0.13] px-2 py-1 text-base font-bold">{ctInfo.name}</span>
				<span className="mt-2.5 text-[2.5rem] font-bold">{eloNum}</span>
				<span className="text-[0.9rem] font-semibold opacity-70">
					{gameCount} game{gameCount === 1 ? '' : 's'}
				</span>
			</div>
		);
	}

	return (
		<div className="my-[35px]">
			<h2>ELO</h2>
			<div className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(auto,200px))] gap-2.5">{eloBlocks}</div>
		</div>
	);
}
