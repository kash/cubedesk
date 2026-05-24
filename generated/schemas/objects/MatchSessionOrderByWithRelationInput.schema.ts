import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChatMessageOrderByRelationAggregateInputObjectSchema as ChatMessageOrderByRelationAggregateInputObjectSchema } from './ChatMessageOrderByRelationAggregateInput.schema';
import { GameOptionsOrderByWithRelationInputObjectSchema as GameOptionsOrderByWithRelationInputObjectSchema } from './GameOptionsOrderByWithRelationInput.schema';
import { MatchOrderByRelationAggregateInputObjectSchema as MatchOrderByRelationAggregateInputObjectSchema } from './MatchOrderByRelationAggregateInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { MatchSessionOrderByRelevanceInputObjectSchema as MatchSessionOrderByRelevanceInputObjectSchema } from './MatchSessionOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  min_players: SortOrderSchema.optional(),
  max_players: SortOrderSchema.optional(),
  match_type: SortOrderSchema.optional(),
  custom_match: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  created_by_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rated: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  chat_messages: z.lazy(() => ChatMessageOrderByRelationAggregateInputObjectSchema).optional(),
  game_options: z.lazy(() => GameOptionsOrderByWithRelationInputObjectSchema).optional(),
  matches: z.lazy(() => MatchOrderByRelationAggregateInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => MatchSessionOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const MatchSessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MatchSessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionOrderByWithRelationInput>;
export const MatchSessionOrderByWithRelationInputObjectZodSchema = makeSchema();
