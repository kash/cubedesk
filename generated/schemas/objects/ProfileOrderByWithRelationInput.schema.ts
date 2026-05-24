import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EloRatingOrderByWithRelationInputObjectSchema as EloRatingOrderByWithRelationInputObjectSchema } from './EloRatingOrderByWithRelationInput.schema';
import { ImageOrderByWithRelationInputObjectSchema as ImageOrderByWithRelationInputObjectSchema } from './ImageOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ProfileViewOrderByRelationAggregateInputObjectSchema as ProfileViewOrderByRelationAggregateInputObjectSchema } from './ProfileViewOrderByRelationAggregateInput.schema';
import { ProfileOrderByRelevanceInputObjectSchema as ProfileOrderByRelevanceInputObjectSchema } from './ProfileOrderByRelevanceInput.schema'

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
  elo_rating: z.lazy(() => EloRatingOrderByWithRelationInputObjectSchema).optional(),
  header_image: z.lazy(() => ImageOrderByWithRelationInputObjectSchema).optional(),
  pfp_image: z.lazy(() => ImageOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  views: z.lazy(() => ProfileViewOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => ProfileOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithRelationInput>;
export const ProfileOrderByWithRelationInputObjectZodSchema = makeSchema();
