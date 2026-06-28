import React from 'react';
import ProfileRow from '@/components/community/ProfileRow';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import PaginatedList from '@/components/common/paginated_list/PaginatedList';
import {gqlQueryTyped} from '@/components/api';
import {PublicUserAccount} from '../../../server/schemas/UserAccount.schema';
import {UserSearchDocument} from '@/@types/generated/graphql';
import {PaginationArgs, PaginationOutput} from '../../../server/schemas/Pagination.schema';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {query} = props;

	async function fetchData(pageArgs: PaginationArgs): Promise<PaginationOutput<PublicUserAccount>> {
		const res = await gqlQueryTyped(
			UserSearchDocument,
			{
				pageArgs,
			},
			{
				fetchPolicy: 'no-cache',
			}
		);

		return res.data.userSearch as unknown as PaginationOutput<PublicUserAccount>;
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
