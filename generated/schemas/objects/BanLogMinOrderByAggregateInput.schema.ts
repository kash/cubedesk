import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional(),
  banned_user_id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  banned_until: SortOrderSchema.optional(),
  minutes: SortOrderSchema.optional(),
  forever: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const BanLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogMinOrderByAggregateInput>;
export const BanLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
