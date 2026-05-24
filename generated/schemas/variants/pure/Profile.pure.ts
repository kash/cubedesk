import * as z from 'zod';
// prettier-ignore
export const ProfileModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    header_image_id: z.string().nullable(),
    pfp_image_id: z.string().nullable(),
    created_at: z.date(),
    bio: z.string().nullable(),
    favorite_event: z.string().nullable(),
    main_three_cube: z.string().nullable(),
    three_goal: z.string().nullable(),
    three_method: z.string().nullable(),
    reddit_link: z.string().nullable(),
    twitch_link: z.string().nullable(),
    youtube_link: z.string().nullable(),
    twitter_link: z.string().nullable(),
    discord_id: z.string().nullable(),
    show_discord_message_button: z.boolean(),
    elo_rating: z.unknown().nullable(),
    header_image: z.unknown().nullable(),
    pfp_image: z.unknown().nullable(),
    user: z.unknown(),
    views: z.array(z.unknown())
}).strict();

export type ProfilePureType = z.infer<typeof ProfileModelSchema>;
