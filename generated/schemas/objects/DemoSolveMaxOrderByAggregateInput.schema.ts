import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  demo_session_id: SortOrderSchema.optional(),
  ip_address: SortOrderSchema.optional(),
  raw_time: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  scramble: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  ended_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const DemoSolveMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DemoSolveMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveMaxOrderByAggregateInput>;
export const DemoSolveMaxOrderByAggregateInputObjectZodSchema = makeSchema();
