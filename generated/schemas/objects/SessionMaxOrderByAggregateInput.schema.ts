import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  order: SortOrderSchema.optional()
}).strict();
export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxOrderByAggregateInput>;
export const SessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
