import React from 'react';
import EloRow from '../../../components/community/EloRow';
import Header from '../../../components/layout/header/Header';
import PaginatedList from '../../../components/common/paginated_list/PaginatedList';
import {api} from '../../../trpc/react';
import {EloRating} from '@/generated/zod';

interface PaginationArgs {
	page: number;
	pageSize: number;
	searchQuery: string;
}

interface PaginatedResponse<T> {
	items: T[];
	total: number;
	hasMore: boolean;
}

export default function LeaderboardsPage() {
	async function fetchData(pageArgs: PaginationArgs): Promise<PaginatedResponse<EloRating>> {
		const res = await api.eloLeaderboards.eloLeaderboards.query(pageArgs);
		return res;
	}

	return (
		<div className="w-full p-2">
			<Header path="/community/leaderboards" title="CubeDesk - Leaderboards" />
			<div className="w-full max-w-4xl mx-auto">
				<PaginatedList<EloRating>
					fetchData={fetchData}
					getItemRow={(data, index) => <EloRow key={data.id} rank={index + 1} eloRating={data} />}
				/>
			</div>
		</div>
	);
}