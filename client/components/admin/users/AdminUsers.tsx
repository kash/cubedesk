import React from 'react';
import './AdminUsers.scss';
import {gqlQueryTyped} from '../../api';
import {AdminUserSearchDocument} from '../../../@types/generated/graphql';
import {UserAccount} from '../../../../server/schemas/UserAccount.schema';
import PaginatedList from '../../common/paginated_list/PaginatedList';
import ProfileRow from '../../community/profile_row/ProfileRow';
import {PaginationArgsInput} from '../../../../server/schemas/Pagination.schema';
import Input from '../../common/inputs/input/Input';
import {useInput} from '../../../util/hooks/useInput';

export default function AdminUsers() {
	const [query, setQuery] = useInput('');

	async function fetchData(pageArgs: PaginationArgsInput) {
		const res = await gqlQueryTyped(
			AdminUserSearchDocument,
			{
				pageArgs,
			},
			{
				fetchPolicy: 'network-only',
			}
		);

		return res.data.adminUserSearch;
	}

	return (
		<div className="w-full p-2">
			<div className="w-full max-w-4xl mx-auto">
				<div>
					<Input value={query} onChange={setQuery} />
				</div>
				<PaginatedList<UserAccount>
					searchQuery={query}
					fetchData={fetchData}
					getItemRow={(user) => {
						return <ProfileRow hideDropdown user={user} key={user.id} />;
					}}
				/>
			</div>
		</div>
	);
}
