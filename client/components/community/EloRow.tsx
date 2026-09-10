import Avatar from '@/components/common/avatar/Avatar';
import {EloRatingWithUser} from '@/types/elo';
import {Serialized} from '@/types/serialized';
import classNames from 'classnames';
import React from 'react';

interface Props {
	rank: number;
	eloRating: Serialized<EloRatingWithUser>;
}

export default function EloRow(props: Props) {
	const {eloRating, rank} = props;
	const {user, elo_333_rating, games_333_count} = eloRating;

	return (
		<div className="mb-2 flex w-full flex-row items-center justify-between rounded border border-text/15 bg-module p-4">
			<div className="flex flex-row items-center">
				<div
					className={classNames('flex h-10 w-10 shrink-0 items-center justify-center rounded', {
						'bg-button': rank > 3,
						'bg-amber-300': rank === 1,
						'bg-stone-400': rank === 2,
						'bg-amber-700': rank === 3,
					})}
				>
					<span
						className={classNames('text-xl font-semibold', {
							'text-text': rank > 3,
							'text-amber-800': rank === 1,
							'text-stone-800': rank === 2,
							'text-amber-100': rank === 3,
						})}
					>
						#{rank}
					</span>
				</div>
				<div className="ml-3">
					<Avatar hideBadges showWcaBadge user={user} />
				</div>
			</div>
			<div className="flex flex-row items-center">
				<div className="flex flex-col items-center">
					<span className="table text-3xl font-bold text-primary">{elo_333_rating}</span>
					<span className="table text-sm text-text/50">rating</span>
				</div>
				<div className="mx-3 h-full w-1 bg-text/50" />
				<div className="flex flex-col items-center opacity-50">
					<span className="table text-3xl font-bold text-text">{games_333_count}</span>
					<span className="table text-sm text-text">game{games_333_count === 1 ? '' : 's'}</span>
				</div>
			</div>
		</div>
	);
}
