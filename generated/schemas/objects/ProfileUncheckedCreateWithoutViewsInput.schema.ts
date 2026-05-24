import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingUncheckedCreateNestedOneWithoutProfileInputObjectSchema as EloRatingUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from './EloRatingUncheckedCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  header_image_id: z.string().optional().nullable(),
  pfp_image_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
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
  show_discord_message_button: z.boolean().optional(),
  elo_rating: z.lazy(() => EloRatingUncheckedCreateNestedOneWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateWithoutViewsInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutViewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutViewsInput>;
export const ProfileUncheckedCreateWithoutViewsInputObjectZodSchema = makeSchema();
