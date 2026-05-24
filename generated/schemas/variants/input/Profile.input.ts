import * as z from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    header_image_id: z.string().optional().nullable(),
    pfp_image_id: z.string().optional().nullable(),
    created_at: z.date(),
    bio: z.string().optional().nullable(),
    favorite_event: z.string().optional().nullable(),
    main_three_cube: z.string().optional().nullable(),
    three_goal: z.string().optional().nullable(),
    three_method: z.string().optional().nullable(),
    reddit_link: z.string().optional().nullable(),
    twitch_link: z.string().optional().nullable(),
    youtube_link: z.string().optional().nullable(),
    twitter_link: z.string().optional().nullable(),
    discord_id: z.string().optional().nullable(),
    show_discord_message_button: z.boolean(),
    elo_rating: z.unknown().optional().nullable(),
    header_image: z.unknown().optional().nullable(),
    pfp_image: z.unknown().optional().nullable(),
    user: z.unknown(),
    views: z.array(z.unknown())
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
