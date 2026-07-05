import type {Image} from './image';
import type {TopAverage, TopSolve} from './top-solve';
import type {PublicUserAccount} from './user';

export interface Profile {
	id: string;
	user_id: string;
	header_image_id?: string;
	pfp_image_id?: string;
	created_at: Date;
	bio?: string;
	favorite_event?: string;
	main_three_cube?: string;
	three_goal?: string;
	three_method?: string;
	reddit_link?: string;
	twitch_link?: string;
	youtube_link?: string;
	twitter_link?: string;
	discord_id?: string;
	show_discord_message_button?: boolean;
	header_image?: Image;
	pfp_image?: Image;
	user?: PublicUserAccount;
	top_solves?: TopSolve[];
	top_averages?: TopAverage[];
}

export interface ProfileInput {
	bio?: string;
	favorite_event?: string;
	main_three_cube?: string;
	three_goal?: string;
	three_method?: string;
	reddit_link?: string;
	twitch_link?: string;
	youtube_link?: string;
	twitter_link?: string;
}
