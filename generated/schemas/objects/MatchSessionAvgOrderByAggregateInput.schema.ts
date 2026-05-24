import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  min_players: SortOrderSchema.optional(),
  max_players: SortOrderSchema.optional()
}).strict();
export const MatchSessionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionAvgOrderByAggregateInput>;
export const MatchSessionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
