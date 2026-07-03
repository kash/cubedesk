import React, {useEffect, useState} from 'react';
import {X, Plus, Timer, Check} from 'phosphor-react';
import {addFriendship, removeFriendship} from '@/actions/account';
import {toastSuccess} from '@/util/toast';
import Button, {ButtonProps} from '@/components/common/Button';
import {FriendshipRequest as FriendshipRequestSchema} from '@/types/friendship';
import {trpc} from '@/util/trpc';
import {useDispatch, useSelector} from 'react-redux';
import {useMe} from '@/util/hooks/useMe';
import {PublicUserAccount} from '@/types/user';

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
	const [friendRequestSent, setFriendRequestSent] = useState<FriendshipRequestSchema | null>(
		props.friendRequestSent ?? null,
	);
	const [friendRequestReceived, setFriendRequestReceived] =
		useState<FriendshipRequestSchema | null>(props.friendRequestReceived ?? null);
	const [overFriendButton, setOverFriendButton] = useState(false);

	useEffect(() => {
		getFriendshipRequests(user.id).then(({sentRequest, receivedRequest}) => {
			setLoading(false);
			setFriendRequestSent(sentRequest);
			setFriendRequestReceived(receivedRequest);
		});
	}, []);

	async function getFriendshipRequests(userId: string) {
		const [sentReqs, receivedReqs] = await Promise.all([
			trpc.friendship.requestsToUser.query({userId}),
			trpc.friendship.requestsFromUser.query({userId}),
		]);

		const sentRequest = sentReqs && sentReqs.length ? sentReqs[0] : null;
		const receivedRequest = receivedReqs && receivedReqs.length ? receivedReqs[0] : null;

		return {sentRequest, receivedRequest};
	}

	async function friendshipButton() {
		if (friends[user.id]) {
			await trpc.friendship.unfriend.mutate({
				targetUserId: user.id,
			});

			dispatch(removeFriendship(user.id));
			toastSuccess(`Successfully unfriended ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestSent) {
			await trpc.friendship.deleteRequest.mutate({
				friendshipRequestId: friendRequestSent.id,
			});

			toastSuccess(`Cancelled friend request for ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestReceived) {
			const friendship = await trpc.friendship.acceptRequest.mutate({
				friendshipRequestId: friendRequestReceived.id,
			});

			toastSuccess(`Accepted ${user.username}'s friend request`);
			dispatch(addFriendship(friendship));

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else {
			const request = await trpc.friendship.sendRequest.mutate({
				toUserId: user.id,
			});

			toastSuccess(`Friend request sent to ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(request);
		}
	}

	function getFriendButtonParams(): ButtonProps {
		let friendButtonParams: ButtonProps = {
			text: 'Add Friend',
			icon: <Plus weight="bold" />,
			gray: true,
		};

		if (friends[user.id]) {
			friendButtonParams = {
				text: 'Friends',
				icon: <Check weight="bold" />,
				gray: true,
			};

			if (overFriendButton) {
				friendButtonParams = {
					text: 'Remove Friend',
					icon: <X weight="bold" />,
					danger: true,
				};
			}
		} else if (friendRequestReceived) {
			friendButtonParams = {
				text: 'Accept Friend Request',
				icon: <Plus weight="bold" />,
				primary: true,
			};
		} else if (friendRequestSent) {
			friendButtonParams = {
				text: 'Friend Request Sent',
				icon: <Timer weight="bold" />,
				warning: true,
			};

			if (overFriendButton) {
				friendButtonParams = {
					text: 'Cancel Friend Request',
					icon: <X weight="bold" />,
					danger: true,
				};
			}
		}

		return friendButtonParams;
	}

	const friendButtonParams = getFriendButtonParams();

	let friendButton: React.ReactNode = (
		<Button
			onClick={friendshipButton}
			onMouseOver={() => setOverFriendButton(true)}
			onMouseOut={() => setOverFriendButton(false)}
			{...friendButtonParams}
		/>
	);

	if (loading || !user || !me || user.id === me.id) {
		friendButton = null;
	}

	return friendButton;
}
