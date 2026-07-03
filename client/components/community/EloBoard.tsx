import React from 'react';
import EloRow from '@/components/community/EloRow';
import Header from '@/components/layout/Header';
import PaginatedList from '@/components/common/PaginatedList';
import {trpc} from '@/util/trpc';
import {PaginationArgs} from '@/types/pagination';
import {EloRatingWithUser} from '@/types/elo';
import {Serialized} from '@/types/serialized';

export default function EloBoard() {
	function fetchData(pageArgs: PaginationArgs) {
		return trpc.leaderboards.elo.query(pageArgs);
	}

	return (
		<div className="w-full p-2">
			<Header path="/community/leaderboards" title="CubeDesk - Leaderboards" />
			<div className="w-full max-w-4xl mx-auto">
				<PaginatedList<Serialized<EloRatingWithUser>>
					fetchData={fetchData}
					getItemRow={(data, index) => <EloRow key={data.id} rank={index + 1} eloRating={data} />}
				/>
			</div>
		</div>
	);
}
