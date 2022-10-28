import React from 'react';
import './ProfileElo.scss';
import block from '../../../styles/bem';
import {EloRating} from '../../../@types/generated/graphql';
import {getCubeTypeInfoById} from '../../../util/cubes/util';

const b = block('profile-elo');

interface Props {
	eloRating: EloRating;
}

export default function ProfileElo(props: Props) {
	const {eloRating} = props;

	const cubeTypes = ['222', '333', '444'];
	const eloBlocks = [];

	for (const ct of cubeTypes) {
		if (eloRating[`games_${ct}_count`] === 0) {
			continue;
		}

		const gameCount = eloRating[`games_${ct}_count`];
		const eloNum = eloRating[`elo_${ct}_rating`];
		const ctInfo = getCubeTypeInfoById(ct);
		eloBlocks.push(
			<div key={ct} className={b('elo-block')}>
				<span className={b('elo-cubetype')}>{ctInfo.name}</span>
				<span className={b('elo-number')}>{eloNum}</span>
				<span className={b('game-count')}>
					{gameCount} game{gameCount === 1 ? '' : 's'}
				</span>
			</div>
		);
	}

	return (
		<div className={b()}>
			<h2>ELO</h2>
			<div className={b('body')}>{eloBlocks}</div>
		</div>
	);
}
