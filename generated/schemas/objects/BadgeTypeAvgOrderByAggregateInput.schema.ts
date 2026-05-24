import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  priority: SortOrderSchema.optional()
}).strict();
export const BadgeTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeAvgOrderByAggregateInput>;
export const BadgeTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
