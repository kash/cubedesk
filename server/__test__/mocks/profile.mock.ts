import {UserMock} from './user.mock';
import {TopSolveMock} from './top_solve.mock';
import {TopAverageMock} from './top_average.mock';

export const ProfileMock = {
	id: 'ffd1aa3d-1606-4b34-8fba-519fe99c2750',
	bio: null,
	three_method: null,
	three_goal: null,
	main_three_cube: null,
	favorite_event: null,
	youtube_link: null,
	twitter_link: null,
	user_id: 'e4de5533-7c34-42c1-ae57-93ad0cb5b3d8',
	reddit_link: null,
	twitch_link: null,
	user: UserMock,
	top_solves: [TopSolveMock, TopSolveMock, TopSolveMock, TopSolveMock],
	top_averages: [TopAverageMock, TopAverageMock],
	header_image: {
		id: '466e0d98-629b-4451-99ed-1a832f3da62c',
		user_id: 'e4de5533-7c34-42c1-ae57-93ad0cb5b3d8',
		storage_path: 'images/XF4T2Z1C18.jpeg',
	},
	pfp_image: ImageM,
};
