import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameSessionOrderByWithRelationInputObjectSchema as GameSessionOrderByWithRelationInputObjectSchema } from './GameSessionOrderByWithRelationInput.schema';
import { MatchSessionOrderByWithRelationInputObjectSchema as MatchSessionOrderByWithRelationInputObjectSchema } from './MatchSessionOrderByWithRelationInput.schema';
import { GameOptionsOrderByRelevanceInputObjectSchema as GameOptionsOrderByRelevanceInputObjectSchema } from './GameOptionsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  game_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  game_type: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  elimination_starting_time_seconds: SortOrderSchema.optional(),
  elimination_percent_change_rate: SortOrderSchema.optional(),
  head_to_head_target_win_count: SortOrderSchema.optional(),
  gauntlet_time_multiplier: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  game_session: z.lazy(() => GameSessionOrderByWithRelationInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => GameOptionsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const GameOptionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GameOptionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsOrderByWithRelationInput>;
export const GameOptionsOrderByWithRelationInputObjectZodSchema = makeSchema();
