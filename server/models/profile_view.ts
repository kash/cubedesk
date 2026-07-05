import type {Profile, UserAccount} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';
import {v4 as uuid} from 'uuid';

export function createProfileView(profile: Profile, profileUser: UserAccount, viewer: UserAccount | null | undefined) {
	return getPrisma().profileView.create({
		data: {
			id: uuid(),
			viewer_id: viewer?.id || null,
			profile_id: profile.id,
			profile_user_id: profileUser.id,
		},
	});
}
