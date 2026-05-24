import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MatchParticipantCountOrderByAggregateInputObjectSchema as MatchParticipantCountOrderByAggregateInputObjectSchema } from './MatchParticipantCountOrderByAggregateInput.schema';
import { MatchParticipantAvgOrderByAggregateInputObjectSchema as MatchParticipantAvgOrderByAggregateInputObjectSchema } from './MatchParticipantAvgOrderByAggregateInput.schema';
import { MatchParticipantMaxOrderByAggregateInputObjectSchema as MatchParticipantMaxOrderByAggregateInputObjectSchema } from './MatchParticipantMaxOrderByAggregateInput.schema';
import { MatchParticipantMinOrderByAggregateInputObjectSchema as MatchParticipantMinOrderByAggregateInputObjectSchema } from './MatchParticipantMinOrderByAggregateInput.schema';
import { MatchParticipantSumOrderByAggregateInputObjectSchema as MatchParticipantSumOrderByAggregateInputObjectSchema } from './MatchParticipantSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => MatchParticipantCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MatchParticipantAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MatchParticipantMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MatchParticipantMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MatchParticipantSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MatchParticipantOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MatchParticipantOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantOrderByWithAggregationInput>;
export const MatchParticipantOrderByWithAggregationInputObjectZodSchema = makeSchema();
