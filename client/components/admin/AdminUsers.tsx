import React from 'react';
import {trpc} from '@/util/trpc';
import PaginatedList from '@/components/common/PaginatedList';
import ProfileRow from '@/components/community/ProfileRow';
import {PaginationArgsInput} from '@/types/pagination';
import Input from '@/components/common/inputs/input/Input';
import {useInput} from '@/util/hooks/useInput';
import {PublicUser} from '@/types/user';
import {Serialized} from '@/types/serialized';

export default function AdminUsers() {
	const [query, setQuery] = useInput('');

	async function fetchData(pageArgs: PaginationArgsInput) {
		return trpc.admin.searchUsers.query(pageArgs);
	}

	return (
		<div className="w-full p-2">
			<div className="w-full max-w-4xl mx-auto">
				<div>
					<Input value={query} onChange={setQuery} />
				</div>
				<PaginatedList<Serialized<PublicUser>>
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
