import type {Image} from '@/types/image';
import type {TopAverage, TopSolve} from '@/types/top-solve';
import type {PublicUserAccount} from '@/types/user';

export interface Profile {
	id: string;
	user_id: string;
	header_image_id?: string | null;
	pfp_image_id?: string | null;
	created_at: Date;
	bio?: string | null;
	favorite_event?: string | null;
	main_three_cube?: string | null;
	three_goal?: string | null;
	three_method?: string | null;
	reddit_link?: string | null;
	twitch_link?: string | null;
	youtube_link?: string | null;
	twitter_link?: string | null;
	discord_id?: string | null;
	show_discord_message_button?: boolean;
	header_image?: Image | null;
	pfp_image?: Image | null;
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
