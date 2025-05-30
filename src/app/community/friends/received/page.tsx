import React from 'react';
import '@/components/community/friends/Friends.scss';
import ProfileRow from '@/components/community/profile_row/ProfileRow';
import Pagination, {PaginationTab} from '@/components/common/pagination/Pagination';
import {UserAccount} from '@/generated/zod';
import FriendshipRequest from '@/components/profile/friendship_request/FriendshipRequest';
import block from '@/styles/bem';

const b = block('community__friends');

const tabIdToOtherUserMap = {
	friends: 'other_user',
	received: 'from_user',
	sent: 'to_user',
};

// TODO: Migrate to tRPC - these tabs need to be updated to use tRPC queries
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

export default function FriendsReceivedPage() {
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