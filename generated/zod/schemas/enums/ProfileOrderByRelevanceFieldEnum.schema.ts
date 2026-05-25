import * as z from 'zod';

export const ProfileOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'header_image_id', 'pfp_image_id', 'bio', 'favorite_event', 'main_three_cube', 'three_goal', 'three_method', 'reddit_link', 'twitch_link', 'youtube_link', 'twitter_link', 'discord_id'])

export type ProfileOrderByRelevanceFieldEnum = z.infer<typeof ProfileOrderByRelevanceFieldEnumSchema>;