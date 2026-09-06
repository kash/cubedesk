import PaginatedList from '@/components/common/PaginatedList';
import ProfileRow from '@/components/community/ProfileRow';
import {Input} from '@/components/ui/input';
import {PaginationArgsInput} from '@/types/pagination';
import {Serialized} from '@/types/serialized';
import {PublicUser} from '@/types/user';
import {useInput} from '@/util/hooks/useInput';
import {trpc} from '@/util/trpc';
import React from 'react';

export default function AdminUsers() {
	const [query, setQuery] = useInput('');

	async function fetchData(pageArgs: PaginationArgsInput) {
		return trpc.admin.searchUsers.query(pageArgs);
	}

	return (
		<div className="w-full p-2">
			<div className="mx-auto w-full max-w-4xl">
				<div>
					<Input
						value={query}
						onChange={setQuery}
						aria-label={'Search users'}
						className="mb-2"
					/>
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
