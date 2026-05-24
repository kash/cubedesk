import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  elimination_starting_time_seconds: SortOrderSchema.optional(),
  elimination_percent_change_rate: SortOrderSchema.optional(),
  head_to_head_target_win_count: SortOrderSchema.optional(),
  gauntlet_time_multiplier: SortOrderSchema.optional()
}).strict();
export const GameOptionsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameOptionsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsSumOrderByAggregateInput>;
export const GameOptionsSumOrderByAggregateInputObjectZodSchema = makeSchema();
