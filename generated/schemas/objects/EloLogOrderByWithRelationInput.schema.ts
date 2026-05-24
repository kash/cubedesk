import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './MatchOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { EloLogOrderByRelevanceInputObjectSchema as EloLogOrderByRelevanceInputObjectSchema } from './EloLogOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  opponent_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: SortOrderSchema.optional(),
  elo_change: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  player_id: SortOrderSchema.optional(),
  opponent_new_elo_rating: SortOrderSchema.optional(),
  opponent_new_game_count: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  player_new_elo_rating: SortOrderSchema.optional(),
  player_new_game_count: SortOrderSchema.optional(),
  refunded_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match: z.lazy(() => MatchOrderByWithRelationInputObjectSchema).optional(),
  opponent: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  player: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => EloLogOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const EloLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EloLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogOrderByWithRelationInput>;
export const EloLogOrderByWithRelationInputObjectZodSchema = makeSchema();
