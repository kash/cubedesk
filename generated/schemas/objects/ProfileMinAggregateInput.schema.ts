import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  header_image_id: z.literal(true).optional(),
  pfp_image_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  favorite_event: z.literal(true).optional(),
  main_three_cube: z.literal(true).optional(),
  three_goal: z.literal(true).optional(),
  three_method: z.literal(true).optional(),
  reddit_link: z.literal(true).optional(),
  twitch_link: z.literal(true).optional(),
  youtube_link: z.literal(true).optional(),
  twitter_link: z.literal(true).optional(),
  discord_id: z.literal(true).optional(),
  show_discord_message_button: z.literal(true).optional()
}).strict();
export const ProfileMinAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMinAggregateInputType>;
export const ProfileMinAggregateInputObjectZodSchema = makeSchema();
