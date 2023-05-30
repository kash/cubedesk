import React, {useEffect, useState} from 'react';
import {X, Plus, Timer, Check} from '@phosphor-icons/react';
import {addFriendship, removeFriendship} from '../../../actions/account';
import {toastSuccess} from '../../../util/toast';
import {gqlMutate, gqlMutateTyped, gqlQueryTyped} from '../../api';
import Button, {ButtonProps} from '../../common/button/Button';
import {
	FriendshipRequest as FriendshipRequestSchema,
	AcceptFriendshipRequestDocument,
	DeleteFriendshipRequestDocument,
	UnfriendDocument,
	ReceivedFriendshipRequestsFromUserDocument,
	SentFriendshipRequestsToUserDocument,
	SendFriendshipRequestDocument,
} from '../../../@types/generated/graphql';
import {useDispatch, useSelector} from 'react-redux';
import {useMe} from '../../../util/hooks/useMe';
import {PublicUserAccount} from '../../../../server/schemas/UserAccount.schema';

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

	useEffect(() => {
		getFriendshipRequests(user.id).then(({sentRequest, receivedRequest}) => {
			setLoading(false);
			setFriendRequestSent(sentRequest);
			setFriendRequestReceived(receivedRequest);
		});
	}, []);

	async function getFriendshipRequests(userId: string) {
		const vars = {
			userId,
		};

		const [sent, requested] = await Promise.all([
			gqlQueryTyped(ReceivedFriendshipRequestsFromUserDocument, vars),
			gqlQueryTyped(SentFriendshipRequestsToUserDocument, vars),
		]);

		const setReqs = sent.data.receivedFriendshipRequestsFromUser;
		const requestedReqs = requested.data.sentFriendshipRequestsToUser;

		const sentRequest = setReqs && setReqs.length ? setReqs[0] : null;
		const receivedRequest = requestedReqs && requestedReqs.length ? requestedReqs[0] : null;

		return {sentRequest, receivedRequest};
	}

	async function friendshipButton() {
		if (friends[user.id]) {
			await gqlMutate(UnfriendDocument, {
				targetUserId: user.id,
			});

			dispatch(removeFriendship(user.id));
			toastSuccess(`Successfully unfriended ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestSent) {
			await gqlMutate(DeleteFriendshipRequestDocument, {
				friendshipRequestId: friendRequestSent.id,
			});

			toastSuccess(`Cancelled friend request for ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else if (friendRequestReceived) {
			const res = await gqlMutateTyped(AcceptFriendshipRequestDocument, {
				friendshipRequestId: friendRequestReceived.id,
			});

			toastSuccess(`Accepted ${user.username}'s friend request`);
			dispatch(addFriendship(res.data.acceptFriendshipRequest));

			setFriendRequestReceived(null);
			setFriendRequestSent(null);
		} else {
			const request = await gqlMutateTyped(SendFriendshipRequestDocument, {
				toUserId: user.id,
			});

			toastSuccess(`Friend request sent to ${user.username}`);

			setFriendRequestReceived(null);
			setFriendRequestSent(request.data.sendFriendshipRequest);
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

	let friendButton = (
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
