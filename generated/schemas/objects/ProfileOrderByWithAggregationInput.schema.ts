import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileCountOrderByAggregateInputObjectSchema as ProfileCountOrderByAggregateInputObjectSchema } from './ProfileCountOrderByAggregateInput.schema';
import { ProfileMaxOrderByAggregateInputObjectSchema as ProfileMaxOrderByAggregateInputObjectSchema } from './ProfileMaxOrderByAggregateInput.schema';
import { ProfileMinOrderByAggregateInputObjectSchema as ProfileMinOrderByAggregateInputObjectSchema } from './ProfileMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  header_image_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pfp_image_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  bio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  favorite_event: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  main_three_cube: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  three_goal: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  three_method: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reddit_link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  twitch_link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  youtube_link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  twitter_link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  discord_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  show_discord_message_button: SortOrderSchema.optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithAggregationInput>;
export const ProfileOrderByWithAggregationInputObjectZodSchema = makeSchema();
