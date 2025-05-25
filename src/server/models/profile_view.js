import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';

export function createProfileView(profile, profileUser, viewer) {
	return getPrisma().profileView.create({
		data: {
			id: uuid(),
			viewer_id: viewer?.id || null,
			profile_id: profile.id,
			profile_user_id: profileUser.id,
		},
	});
}
