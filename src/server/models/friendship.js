import {getPrisma} from '../database';
import {v4 as uuid} from 'uuid';

export function getFriendships(user) {
	return getPrisma().friendship.findMany({
		where: {
			user_id: user.id,
		},
	});
}

export async function getFriendship(user, targetUser) {
	const res = await getPrisma().friendship.findMany({
		where: {
			user_id: user.id,
			other_user_id: targetUser.id,
		},
	});

	if (res && res.length) {
		return res[0];
	}

	return null;
}

export async function acceptFriendshipRequest(friendshipRequest) {
	const fromUserId = friendshipRequest.from_id;
	const toUserId = friendshipRequest.to_id;

	const [first, second] = await getPrisma().$transaction([
		getPrisma().friendshipRequest.update({
			where: {
				id: friendshipRequest.id,
			},
			data: {
				accepted_at: new Date(),
			},
		}),
		getPrisma().friendship.create({
			data: {
				id: uuid(),
				user_id: toUserId,
				other_user_id: fromUserId,
				friendship_request_id: friendshipRequest.id,
			},
		}),
		getPrisma().friendship.create({
			data: {
				id: uuid(),
				user_id: fromUserId,
				other_user_id: toUserId,
				friendship_request_id: friendshipRequest.id,
			},
		}),
	]);

	return second;
}

export function getFriendshipRequestById(id) {
	return getPrisma().friendshipRequest.findUnique({
		where: {
			id,
		},
		include: {
			from_user: true,
			to_user: true,
		},
	});
}

export function createFriendshipRequest(fromUser, toUser) {
	return getPrisma().friendshipRequest.create({
		data: {
			id: uuid(),
			from_id: fromUser.id,
			to_id: toUser.id,
		},
	});
}

export function deleteFriendshipRequest(friendshipRequest) {
	return getPrisma().friendshipRequest.delete({
		where: {
			id: friendshipRequest.id,
		},
	});
}

export async function deleteFriendship(friendship, fromUser, toUser) {
	const [first, second] = await getPrisma().$transaction([
		getPrisma().friendship.deleteMany({
			where: {
				user_id: fromUser.id,
				other_user_id: toUser.id,
			},
		}),
		getPrisma().friendship.deleteMany({
			where: {
				user_id: toUser.id,
				other_user_id: fromUser.id,
			},
		}),
	]);

	await getPrisma().friendshipRequest.delete({
		where: {
			id: friendship.friendship_request_id,
		},
	});

	return first;
}
