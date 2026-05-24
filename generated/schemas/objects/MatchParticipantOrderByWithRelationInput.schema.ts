import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './MatchOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { MatchParticipantOrderByRelevanceInputObjectSchema as MatchParticipantOrderByRelevanceInputObjectSchema } from './MatchParticipantOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  match_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  resigned: SortOrderSchema.optional(),
  forfeited: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  won: SortOrderSchema.optional(),
  lost: SortOrderSchema.optional(),
  abandoned: SortOrderSchema.optional(),
  aborted: SortOrderSchema.optional(),
  match: z.lazy(() => MatchOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => MatchParticipantOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const MatchParticipantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MatchParticipantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantOrderByWithRelationInput>;
export const MatchParticipantOrderByWithRelationInputObjectZodSchema = makeSchema();
