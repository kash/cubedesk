import React, {useCallback, useEffect, useState} from 'react';
import {X, Plus, Timer, Check} from '@phosphor-icons/react/dist/ssr';
import {addFriendship, removeFriendship} from '@/lib/actions/account';
import {toastSuccess} from '@/lib/util/toast';
import {Button} from '@/components/ui/button';
import {Icon} from '@phosphor-icons/react';
import {FriendshipRequest as FriendshipRequestSchema, PublicUserAccount} from '@/generated/zod';
import {useDispatch, useSelector} from 'react-redux';
import {useMe} from '@/lib/util/hooks/useMe';
import {api} from '@/trpc/react';

interface Props {
	user: PublicUserAccount;
	fetchData?: boolean;
	friendRequestSent?: FriendshipRequestSchema;
	friendRequestReceived?: FriendshipRequestSchema;
}

export default function FriendshipRequest(props: Props) {
	const dispatch = useDispatch();

	const {user, fetchData} = props;

	const me = useMe();
	const friends = useSelector((state: any) => state.account?.friends);

	const [loading, setLoading] = useState(fetchData);
	const [friendRequestSent, setFriendRequestSent] = useState(props.friendRequestSent);
	const [friendRequestReceived, setFriendRequestReceived] = useState(props.friendRequestReceived);
	const [overFriendButton, setOverFriendButton] = useState(false);

	const {data: sentData} = api.friendship.receivedFriendshipRequestsFromUser.useQuery(
		{userId: user.id},
		{enabled: fetchData}
	);
	const {data: receivedData} = api.friendship.sentFriendshipRequestsToUser.useQuery(
		{userId: user.id},
		{enabled: fetchData}
	);

	useEffect(() => {
		if (sentData && receivedData) {
			setLoading(false);
			setFriendRequestSent(sentData[0] || null);
			setFriendRequestReceived(receivedData[0] || null);
		}
	}, [sentData, receivedData]);

	const sendFriendshipRequestMutation = api.friendship.sendFriendshipRequest.useMutation();
	const acceptFriendshipRequestMutation = api.friendship.acceptFriendshipRequest.useMutation();
	const deleteFriendshipRequestMutation = api.friendship.deleteFriendshipRequest.useMutation();
	const unfriendMutation = api.friendship.unfriend.useMutation();

	const friendshipButton = useCallback(async () => {
		if (friends[user.id]) {
			await unfriendMutation.mutateAsync({
				targetUserId: user.id,
			});

			dispatch(removeFriendship(user.id));
			toastSuccess(`Successfully unfriended ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestSent) {
			await deleteFriendshipRequestMutation.mutateAsync({
				friendshipRequestId: friendRequestSent.id,
			});

			toastSuccess(`Cancelled friend request for ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestReceived) {
			const res = await acceptFriendshipRequestMutation.mutateAsync({
				friendshipRequestId: friendRequestReceived.id,
			});

			toastSuccess(`Accepted ${user.username}'s friend request`);
			dispatch(addFriendship(res));

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else {
			const request = await sendFriendshipRequestMutation.mutateAsync({
				toUserId: user.id,
			});

			toastSuccess(`Friend request sent to ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(request);
		}
	}, [friends, user.id, user.username, unfriendMutation, dispatch, friendRequestSent, deleteFriendshipRequestMutation, friendRequestReceived, acceptFriendshipRequestMutation, sendFriendshipRequestMutation]);

	const getFriendButtonParams = useCallback((): {text: string; icon: Icon; variant: 'default' | 'secondary' | 'destructive'} => {
		if (friends[user.id]) {
			if (overFriendButton) {
				return {
					text: 'Remove Friend',
					icon: X,
					variant: 'destructive',
				};
			}
			return {
				text: 'Friends',
				icon: Check,
				variant: 'secondary',
			};
		} else if (friendRequestReceived) {
			return {
				text: 'Accept Friend Request',
				icon: Plus,
				variant: 'default',
			};
		} else if (friendRequestSent) {
			if (overFriendButton) {
				return {
					text: 'Cancel Friend Request',
					icon: X,
					variant: 'destructive',
				};
			}
			return {
				text: 'Friend Request Sent',
				icon: Timer,
				variant: 'destructive',
			};
		}

		return {
			text: 'Add Friend',
			icon: Plus,
			variant: 'secondary',
		};
	}, [friends, user.id, overFriendButton, friendRequestReceived, friendRequestSent]);

	const friendButtonParams = getFriendButtonParams();

	let friendButton = (
		<Button
			onClick={friendshipButton}
			onMouseEnter={() => setOverFriendButton(true)}
			onMouseLeave={() => setOverFriendButton(false)}
			variant={friendButtonParams.variant}
			icon={friendButtonParams.icon}
		>
			{friendButtonParams.text}
		</Button>
	);

	if (loading || !user || !me || user.id === me.id) {
		friendButton = null;
	}

	return friendButton;
}
