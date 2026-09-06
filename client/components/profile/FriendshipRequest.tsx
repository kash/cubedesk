import {addFriendship, removeFriendship} from '@/actions/account';
import {Button, type ButtonProps} from '@/components/ui/button';
import {FriendshipRequest as FriendshipRequestSchema} from '@/types/friendship';
import {PublicUserAccount} from '@/types/user';
import {useMe} from '@/util/hooks/useMe';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import {Check, Plus, Timer, X} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

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

	const myId = me?.id;

	useEffect(() => {
		// Anonymous visitors can't have friendship requests (and the button doesn't
		// render for them), so don't hit protected endpoints.
		if (!myId || user.id === myId) {
			setLoading(false);
			return;
		}

		getFriendshipRequests(user.id)
			.then(({sentRequest, receivedRequest}) => {
				setFriendRequestSent(sentRequest);
				setFriendRequestReceived(receivedRequest);
			})
			.catch((e) => console.error(e))
			.finally(() => setLoading(false));
	}, [myId, user.id]);

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
			children: (
				<>
					{'Add Friend'} <Plus weight="bold" />{' '}
				</>
			),
			variant: 'secondary',
		};

		if (friends[user.id]) {
			friendButtonParams = {
				children: (
					<>
						{'Friends'} <Check weight="bold" />{' '}
					</>
				),
				variant: 'secondary',
			};

			if (overFriendButton) {
				friendButtonParams = {
					children: (
						<>
							{'Remove Friend'} <X weight="bold" />{' '}
						</>
					),
					variant: 'destructive',
				};
			}
		} else if (friendRequestReceived) {
			friendButtonParams = {
				children: (
					<>
						{'Accept Friend Request'} <Plus weight="bold" />{' '}
					</>
				),
				variant: 'default',
			};
		} else if (friendRequestSent) {
			friendButtonParams = {
				children: (
					<>
						{'Friend Request Sent'} <Timer weight="bold" />{' '}
					</>
				),
				variant: 'secondary',
			};

			if (overFriendButton) {
				friendButtonParams = {
					children: (
						<>
							{'Cancel Friend Request'} <X weight="bold" />{' '}
						</>
					),
					variant: 'destructive',
				};
			}
		}

		return friendButtonParams;
	}

	const friendButtonParams = getFriendButtonParams();

	let friendButton: React.ReactNode = (
		<Button
			variant="secondary"
			{...friendButtonParams}
			onClick={friendshipButton}
			onMouseOver={() => setOverFriendButton(true)}
			onMouseOut={() => setOverFriendButton(false)}
		/>
	);

	if (loading || !user || !me || user.id === me.id) {
		friendButton = null;
	}

	return friendButton;
}
