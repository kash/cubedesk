import React from 'react';
import ProfileRow from '../profile_row/ProfileRow';
import FriendshipRequest from '../../profile/friendship_request/FriendshipRequest';
import PaginatedList from '../../common/paginated_list/PaginatedList';
import {api} from '@/trpc/react';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {query} = props;

	async function fetchData(pageArgs: { page: number; pageSize: number }) {
		const result = await api.userSearch.search.query({
			page: pageArgs.page,
			pageSize: pageArgs.pageSize,
			searchQuery: query,
		});

		return result;
	}

	return (
		<div className="w-full p-2">
			<div className="w-full max-w-4xl mx-auto">
				<PaginatedList<any>
					searchQuery={query}
					fetchData={fetchData}
					getItemRow={(user) => {
						return (
							<ProfileRow
								getRightMessage={<FriendshipRequest user={user} />}
								hideDropdown
								user={user}
								key={user.id}
							/>
						);
					}}
				/>
			</div>
		</div>
	);
}
