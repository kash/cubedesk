import React from 'react';
import ProfileRow from '../profile_row/ProfileRow';
import FriendshipRequest from '../../profile/friendship_request/FriendshipRequest';
import PaginatedList from '../../common/paginated_list/PaginatedList';
import {gqlQueryTyped} from '../../api';
import {PublicUserAccount} from '../../../../server/schemas/UserAccount.schema';
import {UserSearchDocument} from '../../../@types/generated/graphql';
import {PaginationArgsInput} from '../../../../server/schemas/Pagination.schema';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {query} = props;

	async function fetchData(pageArgs: PaginationArgsInput) {
		const res = await gqlQueryTyped(
			UserSearchDocument,
			{
				pageArgs,
			},
			{
				fetchPolicy: 'no-cache',
			}
		);

		return res.data.userSearch;
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
