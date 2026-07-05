import type {Profile, UserAccount} from '@/generated/prisma/client';
import {v4 as uuid} from 'uuid';
import {getPrisma} from '@/server/database';

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
