import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  aborted: SortOrderSchema.optional()
}).strict();
export const MatchParticipantCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCountOrderByAggregateInput>;
export const MatchParticipantCountOrderByAggregateInputObjectZodSchema = makeSchema();
