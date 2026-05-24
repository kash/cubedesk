import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { MatchLobbyOrderByRelevanceInputObjectSchema as MatchLobbyOrderByRelevanceInputObjectSchema } from './MatchLobbyOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  game_type: SortOrderSchema.optional(),
  player_count: SortOrderSchema.optional(),
  elo: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  client_id: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => MatchLobbyOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const MatchLobbyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MatchLobbyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyOrderByWithRelationInput>;
export const MatchLobbyOrderByWithRelationInputObjectZodSchema = makeSchema();
