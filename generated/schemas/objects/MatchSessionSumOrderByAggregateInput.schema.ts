import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  min_players: SortOrderSchema.optional(),
  max_players: SortOrderSchema.optional()
}).strict();
export const MatchSessionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionSumOrderByAggregateInput>;
export const MatchSessionSumOrderByAggregateInputObjectZodSchema = makeSchema();
