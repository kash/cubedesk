import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional()
}).strict();
export const BadgeTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeMinOrderByAggregateInput>;
export const BadgeTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
