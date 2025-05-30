import {api} from '@/trpc/react';
import React, {useCallback} from 'react';
import PaginatedList from '../../common/paginated_list/PaginatedList';
import FriendshipRequest from '../../profile/friendship_request/FriendshipRequest';
import ProfileRow from '../profile_row/ProfileRow';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {query} = props;

	const fetchData = useCallback(async (pageArgs: {page: number; pageSize: number}) => {
		const result = await api.userSearch.search.query({
			page: pageArgs.page,
			pageSize: pageArgs.pageSize,
			searchQuery: query,
		});

		return result;
	}, [query]);

	return (
		<div className="w-full p-2">
			<div className="mx-auto w-full max-w-4xl">
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
