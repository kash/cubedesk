import React from 'react';
import {FRIENDSHIP_FRAGMENT, FRIENDSHIP_REQUEST_FRAGMENT} from '@/util/graphql/fragments';
import ProfileRow from '@/components/community/ProfileRow';
import Pagination, {PaginationTab} from '@/components/common/pagination/Pagination';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import {PublicUserAccount} from '../../../server/schemas/UserAccount.schema';

const tabIdToOtherUserMap = {
	friends: 'other_user',
	received: 'from_user',
	sent: 'to_user',
};

const tabs: PaginationTab[] = [
	{
		id: 'friends',
		value: 'Friends',
		dataQueryName: 'friendships',
		queryFragment: FRIENDSHIP_FRAGMENT,
		queryFragmentName: 'FriendshipFragment',
		link: '/community/friends/list',
		plural: 'friends',
	},
	{
		id: 'received',
		value: 'Received',
		dataQueryName: 'friendshipRequestsReceived',
		queryFragment: FRIENDSHIP_REQUEST_FRAGMENT,
		queryFragmentName: 'FriendshipRequestFragment',
		link: '/community/friends/received',
		plural: 'received requests',
	},
	{
		id: 'sent',
		value: 'Sent',
		dataQueryName: 'friendshipRequestsSent',
		queryFragment: FRIENDSHIP_REQUEST_FRAGMENT,
		queryFragmentName: 'FriendshipRequestFragment',
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
