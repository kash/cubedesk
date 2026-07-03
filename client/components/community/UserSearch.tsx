import React from 'react';
import ProfileRow from '@/components/community/ProfileRow';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import PaginatedList from '@/components/common/PaginatedList';
import {PublicUserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';
import {PaginationArgs, PaginationOutput} from '@/types/pagination';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {query} = props;

	async function fetchData(pageArgs: PaginationArgs): Promise<PaginationOutput<PublicUserAccount>> {
		const res = await trpc.user.search.query(pageArgs);

		return res as unknown as PaginationOutput<PublicUserAccount>;
	}

	return (
		<div className="w-full p-2">
			<div className="w-full max-w-4xl mx-auto">
				<PaginatedList<PublicUserAccount>
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
