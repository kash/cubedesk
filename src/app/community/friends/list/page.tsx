import React, {useState} from 'react';
import ProfileRow from '../../../../components/community/profile_row/ProfileRow';
import Pagination, {PaginationTab} from '../../../../components/common/pagination/Pagination';
import block from '../../../../styles/bem';
import {api} from '@/trpc/react';
import FriendshipRequest from '@/components/profile/friendship_request/FriendshipRequest';
import {UserAccount} from '@/generated/zod';

const b = block('community__friends');

const tabIdToOtherUserMap = {
	friends: 'other_user',
	received: 'from_user',
	sent: 'to_user',
};

const tabs: PaginationTab[] = [
	{
		id: 'friends',
		value: 'Friends',
		link: '/community/friends/list',
		plural: 'friends',
		dataQueryName: 'friends',
		queryFragmentName: 'FriendshipFragment',
	},
	{
		id: 'received',
		value: 'Received',
		link: '/community/friends/received',
		plural: 'received requests',
		dataQueryName: 'receivedRequests',
		queryFragmentName: 'FriendshipRequestFragment',
	},
	{
		id: 'sent',
		value: 'Sent',
		link: '/community/friends/sent',
		plural: 'sent requests',
		dataQueryName: 'sentRequests',
		queryFragmentName: 'FriendshipRequestFragment',
	},
];

export default function FriendsListPage() {
	const [cursor, setCursor] = useState<string | undefined>(undefined);

	const friends = api.friendship.list.useQuery(
		cursor
			? {cursor}
			: {
					limit: 20,
					sortBy: 'created_at',
				},
	);

	return (
		<div className={b()}>
			<Pagination
				tabs={tabs}
				itemRow={(friend, tab) => {
					const otherUser: UserAccount = friend[tabIdToOtherUserMap[tab.id]];

					return (
						<ProfileRow
							getRightMessage={<FriendshipRequest user={otherUser} />}
							hideDropdown
							user={otherUser}
							key={friend.id}
						/>
					);
				}}
			/>
		</div>
	);
}
