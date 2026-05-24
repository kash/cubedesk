import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  game_type: SortOrderSchema.optional(),
  player_count: SortOrderSchema.optional(),
  elo: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  client_id: SortOrderSchema.optional()
}).strict();
export const MatchLobbyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchLobbyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyMaxOrderByAggregateInput>;
export const MatchLobbyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
