import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameOptionsOrderByWithRelationInputObjectSchema as GameOptionsOrderByWithRelationInputObjectSchema } from './GameOptionsOrderByWithRelationInput.schema';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './MatchOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { GameSessionOrderByRelevanceInputObjectSchema as GameSessionOrderByRelevanceInputObjectSchema } from './GameSessionOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  game_type: SortOrderSchema.optional(),
  solve_count: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  game_options: z.lazy(() => GameOptionsOrderByWithRelationInputObjectSchema).optional(),
  match: z.lazy(() => MatchOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => GameSessionOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const GameSessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GameSessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionOrderByWithRelationInput>;
export const GameSessionOrderByWithRelationInputObjectZodSchema = makeSchema();
