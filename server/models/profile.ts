import {getPrisma} from '@/server/database';
import {publicUserInclude} from '@/server/models/user_account';

function getUserProfile(user) {
	return getPrisma().profile.findUnique({
		where: {
			user_id: user.id,
		},
		include: {
			header_image: true,
			pfp_image: true,
			user: publicUserInclude
		},
	});
}

export function updateUserProfile(profile, data) {
	return getPrisma().profile.update({
		where: {
			id: profile.id,
		},
		data,
	});
}

export async function getOrCreateUserProfile(user) {
	const profile = await getUserProfile(user);
	if (profile) {
		return profile;
	}

	await createUserProfile(user);
	const created = await getUserProfile(user);
	if (!created) {
		throw new Error(`Failed to create profile for user ${user.id}`);
	}

	return created;
}

function createUserProfile(user) {
	return getPrisma().profile.create({
		data: {
			user_id: user.id,
		},
	});
}
