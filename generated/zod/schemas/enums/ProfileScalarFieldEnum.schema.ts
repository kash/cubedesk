import * as z from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'user_id', 'header_image_id', 'pfp_image_id', 'created_at', 'bio', 'favorite_event', 'main_three_cube', 'three_goal', 'three_method', 'reddit_link', 'twitch_link', 'youtube_link', 'twitter_link', 'discord_id', 'show_discord_message_button'])

export type ProfileScalarFieldEnum = z.infer<typeof ProfileScalarFieldEnumSchema>;