import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  storage_path: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  hex: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TimerBackgroundMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TimerBackgroundMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundMaxOrderByAggregateInput>;
export const TimerBackgroundMaxOrderByAggregateInputObjectZodSchema = makeSchema();
