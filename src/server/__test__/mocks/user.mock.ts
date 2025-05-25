import {EloRatingMock} from './elo_rating.mock';

export const UserMock = {
	id: 'e4de5533-7c34-42c1-ae57-93ad0cb5b3d8',
	username: 'kash',
	verified: false,
	created_at: '2022-04-07T14:58:34.476Z',
	banned_forever: false,
	is_pro: true,
	banned_until: null,
	admin: true,
	mod: false,
	integrations: [
		{id: '4663e467-c4e0-4651-9aa7-d372b5e3eb6d', service_name: 'discord', __typename: 'Integration'},
		{id: '2af51adc-5b9d-4ab9-89a6-1a6f4fab3b6a', service_name: 'wca', __typename: 'Integration'},
	],
	profile: {
		pfp_image: {
			id: '1a3af784-3a78-4aed-b147-2346279b7b35',
			user_id: 'e4de5533-7c34-42c1-ae57-93ad0cb5b3d8',
			storage_path: 'images/MZU9UT0ANF.png',
		},
	},
	elo_rating: EloRatingMock,
};
