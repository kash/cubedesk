import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchLobbyCountOrderByAggregateInputObjectSchema as MatchLobbyCountOrderByAggregateInputObjectSchema } from './MatchLobbyCountOrderByAggregateInput.schema';
import { MatchLobbyAvgOrderByAggregateInputObjectSchema as MatchLobbyAvgOrderByAggregateInputObjectSchema } from './MatchLobbyAvgOrderByAggregateInput.schema';
import { MatchLobbyMaxOrderByAggregateInputObjectSchema as MatchLobbyMaxOrderByAggregateInputObjectSchema } from './MatchLobbyMaxOrderByAggregateInput.schema';
import { MatchLobbyMinOrderByAggregateInputObjectSchema as MatchLobbyMinOrderByAggregateInputObjectSchema } from './MatchLobbyMinOrderByAggregateInput.schema';
import { MatchLobbySumOrderByAggregateInputObjectSchema as MatchLobbySumOrderByAggregateInputObjectSchema } from './MatchLobbySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  game_type: SortOrderSchema.optional(),
  player_count: SortOrderSchema.optional(),
  elo: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  client_id: SortOrderSchema.optional(),
  _count: z.lazy(() => MatchLobbyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MatchLobbyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MatchLobbyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MatchLobbyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MatchLobbySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MatchLobbyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MatchLobbyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyOrderByWithAggregationInput>;
export const MatchLobbyOrderByWithAggregationInputObjectZodSchema = makeSchema();
