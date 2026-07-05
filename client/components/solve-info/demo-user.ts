import {PublicUserAccount} from '@/types/user';

export const demoUser: PublicUserAccount = {
	id: 'demo',
	username: 'demo',
	admin: false,
	mod: false,
	verified: false,
	banned_forever: false,
	created_at: new Date(0),
	profile: {
		id: 'demo',
		user_id: 'demo',
		created_at: new Date(0),
	},
};
