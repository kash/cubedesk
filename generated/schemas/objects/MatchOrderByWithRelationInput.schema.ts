import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EloLogOrderByRelationAggregateInputObjectSchema as EloLogOrderByRelationAggregateInputObjectSchema } from './EloLogOrderByRelationAggregateInput.schema';
import { GameSessionOrderByRelationAggregateInputObjectSchema as GameSessionOrderByRelationAggregateInputObjectSchema } from './GameSessionOrderByRelationAggregateInput.schema';
import { MatchSessionOrderByWithRelationInputObjectSchema as MatchSessionOrderByWithRelationInputObjectSchema } from './MatchSessionOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { MatchParticipantOrderByRelationAggregateInputObjectSchema as MatchParticipantOrderByRelationAggregateInputObjectSchema } from './MatchParticipantOrderByRelationAggregateInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { MatchOrderByRelevanceInputObjectSchema as MatchOrderByRelevanceInputObjectSchema } from './MatchOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  winner_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  link_code: SortOrderSchema.optional(),
  match_session_id: SortOrderSchema.optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  spectate_code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aborted: SortOrderSchema.optional(),
  elo_log: z.lazy(() => EloLogOrderByRelationAggregateInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionOrderByRelationAggregateInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionOrderByWithRelationInputObjectSchema).optional(),
  winner: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantOrderByRelationAggregateInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => MatchOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const MatchOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MatchOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchOrderByWithRelationInput>;
export const MatchOrderByWithRelationInputObjectZodSchema = makeSchema();
