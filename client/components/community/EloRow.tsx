import React from 'react';
import {EloRating} from '../../../server/schemas/EloRating.schema';
import Avatar from '../common/avatar/Avatar';

interface Props {
	rank: number;
	eloRating: EloRating;
}

export default function EloRow(props: Props) {
	const {eloRating, rank} = props;
	const {user, elo_333_rating, games_333_count} = eloRating;

	return (
		<div className="w-full flex flex-row items-center justify-between p-4 mb-2 bg-module rounded">
			<div className="flex flex-row items-center">
				<div className="w-10 h-10 rounded bg-button flex justify-center items-center">
					<span className="table text-text text-xl">#{rank}</span>
				</div>
				<div className="ml-3">
					<Avatar hideBadges user={user} />
				</div>
			</div>
			<div className="flex flex-row items-center">
				<div className="flex flex-col items-center">
					<span className="table font-bold text-primary text-3xl">{elo_333_rating}</span>
					<span className="table text-text/50 text-sm">rating</span>
				</div>
				<div className="w-1 h-full mx-3 bg-text/50" />
				<div className="flex flex-col items-center opacity-50">
					<span className="table font-bold text-text text-3xl">{games_333_count}</span>
					<span className="table text-text text-sm">game{games_333_count === 1 ? '' : 's'}</span>
				</div>
			</div>
		</div>
	);
}
