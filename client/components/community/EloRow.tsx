import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	const {eloRating, rank} = props;
	const {user, elo_333_rating, games_333_count} = eloRating;

	return (
		<div className="border-text/15 bg-module mb-2 flex w-full flex-row items-center justify-between rounded border p-4">
			<div className="flex flex-row items-center">
				<div
					className={classNames(
						'flex h-10 w-10 shrink-0 items-center justify-center rounded',
						{
							'bg-button': rank > 3,
							'bg-amber-300': rank === 1,
							'bg-stone-400': rank === 2,
							'bg-amber-700': rank === 3,
						},
					)}
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
					<span className="text-primary table text-3xl font-bold">{elo_333_rating}</span>
					<span className="text-text/50 table text-sm">{t('community.ratingLabel')}</span>
				</div>
				<div className="bg-text/50 mx-3 h-full w-1" />
				<div className="flex flex-col items-center opacity-50">
					<span className="text-text table text-3xl font-bold">{games_333_count}</span>
					<span className="text-text table text-sm">
						{t('common.game', {count: games_333_count})}
					</span>
				</div>
			</div>
		</div>
	);
}
