import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  header_image_id: SortOrderSchema.optional(),
  pfp_image_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  favorite_event: SortOrderSchema.optional(),
  main_three_cube: SortOrderSchema.optional(),
  three_goal: SortOrderSchema.optional(),
  three_method: SortOrderSchema.optional(),
  reddit_link: SortOrderSchema.optional(),
  twitch_link: SortOrderSchema.optional(),
  youtube_link: SortOrderSchema.optional(),
  twitter_link: SortOrderSchema.optional(),
  discord_id: SortOrderSchema.optional(),
  show_discord_message_button: SortOrderSchema.optional()
}).strict();
export const ProfileCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCountOrderByAggregateInput>;
export const ProfileCountOrderByAggregateInputObjectZodSchema = makeSchema();
