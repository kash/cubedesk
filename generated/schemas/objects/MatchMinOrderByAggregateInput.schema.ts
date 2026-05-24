import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  winner_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  link_code: SortOrderSchema.optional(),
  match_session_id: SortOrderSchema.optional(),
  ended_at: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  spectate_code: SortOrderSchema.optional(),
  aborted: SortOrderSchema.optional()
}).strict();
export const MatchMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchMinOrderByAggregateInput>;
export const MatchMinOrderByAggregateInputObjectZodSchema = makeSchema();
