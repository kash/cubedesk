import React from 'react';
import ProfileRow from '@/components/community/ProfileRow';
import Pagination, {PaginationTab} from '@/components/common/Pagination';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import {trpc} from '@/util/trpc';
import {PublicUserAccount} from '@/types/user';

const tabIdToOtherUserMap = {
	friends: 'other_user',
	received: 'from_user',
	sent: 'to_user',
};

const tabs: PaginationTab[] = [
	{
		id: 'friends',
		value: 'Friends',
		fetchData: (args) => trpc.friendship.searchFriends.query(args),
		link: '/community/friends/list',
		plural: 'friends',
	},
	{
		id: 'received',
		value: 'Received',
		fetchData: (args) => trpc.friendship.searchRequestsReceived.query(args),
		link: '/community/friends/received',
		plural: 'received requests',
	},
	{
		id: 'sent',
		value: 'Sent',
		fetchData: (args) => trpc.friendship.searchRequestsSent.query(args),
		link: '/community/friends/sent',
		plural: 'sent requests',
	},
];

export default function Friends() {
	return (
		<div>
			<Pagination
				tabs={tabs}
				itemRow={(friend, tab) => {
					const otherUser: PublicUserAccount = friend[tabIdToOtherUserMap[tab.id]];

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
