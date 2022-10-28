import React from 'react';
import {EloLeaderboardsDocument} from '../../@types/generated/graphql';
import EloRow from './EloRow';
import Header from '../layout/header/Header';
import PaginatedList from '../common/paginated_list/PaginatedList';
import {gqlQueryTyped} from '../api';
import {PaginationArgs} from '../../../server/schemas/Pagination.schema';
import {EloRating, PaginatedEloLeaderboards} from '../../../server/schemas/EloRating.schema';

export default function EloBoard() {
	async function fetchData(pageArgs: PaginationArgs): Promise<PaginatedEloLeaderboards> {
		const res = await gqlQueryTyped(
			EloLeaderboardsDocument,
			{
				pageArgs,
			},
			{
				fetchPolicy: 'no-cache',
			}
		);

		return res.data.eloLeaderboards;
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
