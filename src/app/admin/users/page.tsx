import React from 'react';
import '../../../components/admin/users/AdminUsers.scss';
import {api} from '@/trpc/react';
import {UserAccount} from '@/generated/zod';
import PaginatedList from '../../../components/common/paginated_list/PaginatedList';
import ProfileRow from '../../../components/community/profile_row/ProfileRow';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import {useInput} from '@/lib/util/hooks/useInput';

export default function AdminUsersPage() {
	const [query, setQuery] = useInput('');

	async function fetchData(pageArgs: {take: number; skip: number; searchQuery?: string}) {
		const result = await api.admin.adminUserSearch.useQuery({
			take: pageArgs.take,
			skip: pageArgs.skip,
			searchQuery: pageArgs.searchQuery || query,
		});

		return result;
	}

	return (
		<div className="w-full p-2">
			<div className="mx-auto w-full max-w-4xl">
				<div>
					<InputWrapper label="Search Users">
						<Input value={query} onChange={setQuery} placeholder="Search by name, email, or username..." />
					</InputWrapper>
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
