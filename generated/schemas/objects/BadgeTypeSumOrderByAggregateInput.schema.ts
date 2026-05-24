import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  priority: SortOrderSchema.optional()
}).strict();
export const BadgeTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeSumOrderByAggregateInput>;
export const BadgeTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
