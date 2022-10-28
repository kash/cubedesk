import {Field, InputType, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Image} from './Image.schema';
import {TopSolve} from './TopSolve.schema';
import {TopAverage} from './TopAverage.schema';

@ObjectType()
export class Profile {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	header_image_id?: string;

	@Field()
	pfp_image_id?: string;

	@Field()
	created_at: Date;

	@Field()
	bio?: string;

	@Field()
	favorite_event?: string;

	@Field()
	main_three_cube?: string;

	@Field()
	three_goal?: string;

	@Field()
	three_method?: string;

	@Field()
	reddit_link?: string;

	@Field()
	twitch_link?: string;

	@Field()
	youtube_link?: string;

	@Field()
	twitter_link?: string;

	@Field()
	discord_id?: string;

	@Field()
	show_discord_message_button?: boolean;

	@Field(() => Image, {nullable: true})
	header_image?: Image;

	@Field(() => Image, {nullable: true})
	pfp_image?: Image;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => [TopSolve])
	top_solves?: TopSolve[];

	@Field(() => [TopAverage])
	top_averages?: TopAverage[];
}

@InputType()
export class ProfileInput implements Partial<Profile> {
	@Field()
	bio?: string;

	@Field()
	favorite_event?: string;

	@Field()
	main_three_cube?: string;

	@Field()
	three_goal?: string;

	@Field()
	three_method?: string;

	@Field()
	reddit_link?: string;

	@Field()
	twitch_link?: string;

	@Field()
	youtube_link?: string;

	@Field()
	twitter_link?: string;
}
