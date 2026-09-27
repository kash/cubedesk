import PaginatedList from '@/components/common/PaginatedList';
import ProfileRow from '@/components/community/ProfileRow';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import {PaginationArgs, PaginationOutput} from '@/types/pagination';
import {PublicUserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useListLabels} from '@/i18n/useListLabels';

interface Props {
	query: string;
}

export default function UserSearch(props: Props) {
	const {t} = useTranslation();
	const labels = useListLabels(t('common.noUsersFound'));
	const {query} = props;

	async function fetchData(
		pageArgs: PaginationArgs,
	): Promise<PaginationOutput<PublicUserAccount>> {
		const res = await trpc.user.search.query(pageArgs);

		return res as unknown as PaginationOutput<PublicUserAccount>;
	}

	return (
		<div className="w-full p-2">
			<div className="mx-auto w-full max-w-4xl">
				<PaginatedList<PublicUserAccount>
					labels={labels}
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
