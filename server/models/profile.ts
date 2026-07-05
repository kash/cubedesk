import {Profile} from '@/types/profile';
import {getPrisma} from '../database';
import {publicUserInclude} from './user_account';

export function getUserProfile(user): Promise<Profile> {
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

export async function getOrCreateUserProfile(user): Promise<Profile> {
	const profile = await getUserProfile(user);

	if (!profile) {
		await createUserProfile(user);
		return getUserProfile(user);
	} else {
		return profile;
	}
}

export function createUserProfile(user) {
	return getPrisma().profile.create({
		data: {
			user_id: user.id,
		},
	});
}
