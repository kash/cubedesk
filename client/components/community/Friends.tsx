import Pagination, {PaginationTab} from '@/components/common/Pagination';
import ProfileRow from '@/components/community/ProfileRow';
import FriendshipRequest from '@/components/profile/FriendshipRequest';
import {PublicUserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useListLabels} from '@/i18n/useListLabels';

const tabIdToOtherUserMap = {
	friends: 'other_user',
	received: 'from_user',
	sent: 'to_user',
};

const tabs: Omit<PaginationTab, 'value' | 'emptyText'>[] = [
	{
		id: 'friends',
		fetchData: (args) => trpc.friendship.searchFriends.query(args),
		link: '/community/friends/list',
	},
	{
		id: 'received',
		fetchData: (args) => trpc.friendship.searchRequestsReceived.query(args),
		link: '/community/friends/received',
	},
	{
		id: 'sent',
		fetchData: (args) => trpc.friendship.searchRequestsSent.query(args),
		link: '/community/friends/sent',
	},
];

export default function Friends() {
	const {t} = useTranslation();
	const labels = useListLabels();
	const tabText = {
		friends: {value: t('community.friends'), emptyText: t('community.couldNotFindAnyFriends')},
		received: {
			value: t('community.received'),
			emptyText: t('common.couldNotFindAnyReceivedRequests'),
		},
		sent: {value: t('community.sent'), emptyText: t('common.couldNotFindAnySentRequests')},
	};
	return (
		<div>
			<Pagination
				tabs={tabs.map((tab) => ({...tab, ...tabText[tab.id]}))}
				labels={labels}
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
