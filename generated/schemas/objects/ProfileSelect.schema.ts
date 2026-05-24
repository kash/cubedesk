import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingArgsObjectSchema as EloRatingArgsObjectSchema } from './EloRatingArgs.schema';
import { ImageArgsObjectSchema as ImageArgsObjectSchema } from './ImageArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { ProfileViewFindManySchema as ProfileViewFindManySchema } from '../findManyProfileView.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  header_image_id: z.boolean().optional(),
  pfp_image_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  bio: z.boolean().optional(),
  favorite_event: z.boolean().optional(),
  main_three_cube: z.boolean().optional(),
  three_goal: z.boolean().optional(),
  three_method: z.boolean().optional(),
  reddit_link: z.boolean().optional(),
  twitch_link: z.boolean().optional(),
  youtube_link: z.boolean().optional(),
  twitter_link: z.boolean().optional(),
  discord_id: z.boolean().optional(),
  show_discord_message_button: z.boolean().optional(),
  elo_rating: z.union([z.boolean(), z.lazy(() => EloRatingArgsObjectSchema)]).optional(),
  header_image: z.union([z.boolean(), z.lazy(() => ImageArgsObjectSchema)]).optional(),
  pfp_image: z.union([z.boolean(), z.lazy(() => ImageArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  views: z.union([z.boolean(), z.lazy(() => ProfileViewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileSelectObjectSchema: z.ZodType<Prisma.ProfileSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileSelect>;
export const ProfileSelectObjectZodSchema = makeSchema();
