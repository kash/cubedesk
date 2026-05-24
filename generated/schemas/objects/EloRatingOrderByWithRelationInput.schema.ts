import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { EloRatingOrderByRelevanceInputObjectSchema as EloRatingOrderByRelevanceInputObjectSchema } from './EloRatingOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  elo_222_rating: SortOrderSchema.optional(),
  elo_333_rating: SortOrderSchema.optional(),
  elo_444_rating: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  elo_overall_rating: SortOrderSchema.optional(),
  profile_id: SortOrderSchema.optional(),
  games_222_count: SortOrderSchema.optional(),
  games_333_count: SortOrderSchema.optional(),
  games_444_count: SortOrderSchema.optional(),
  games_overall_count: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => EloRatingOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const EloRatingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EloRatingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingOrderByWithRelationInput>;
export const EloRatingOrderByWithRelationInputObjectZodSchema = makeSchema();
