import PaginatedList from '@/components/common/PaginatedList';
import EloRow from '@/components/community/EloRow';
import Header from '@/components/layout/Header';
import {EloRatingWithUser} from '@/types/elo';
import {PaginationArgs} from '@/types/pagination';
import {Serialized} from '@/types/serialized';
import {trpc} from '@/util/trpc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useListLabels} from '@/i18n/useListLabels';

export default function EloBoard() {
	const {t} = useTranslation();
	const labels = useListLabels(t('common.couldNotFindAnyRecords'));
	function fetchData(pageArgs: PaginationArgs) {
		return trpc.leaderboards.elo.query(pageArgs);
	}

	return (
		<div className="w-full p-2">
			<Header path="/community/leaderboards" title={t('community.leaderboardsPageTitle')} />
			<div className="mx-auto w-full max-w-4xl">
				<PaginatedList<Serialized<EloRatingWithUser>>
					labels={labels}
					fetchData={fetchData}
					getItemRow={(data, index) => (
						<EloRow key={data.id} rank={index + 1} eloRating={data} />
					)}
				/>
			</div>
		</div>
	);
}
