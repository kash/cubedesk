import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TimerBackgroundCountOrderByAggregateInputObjectSchema as TimerBackgroundCountOrderByAggregateInputObjectSchema } from './TimerBackgroundCountOrderByAggregateInput.schema';
import { TimerBackgroundMaxOrderByAggregateInputObjectSchema as TimerBackgroundMaxOrderByAggregateInputObjectSchema } from './TimerBackgroundMaxOrderByAggregateInput.schema';
import { TimerBackgroundMinOrderByAggregateInputObjectSchema as TimerBackgroundMinOrderByAggregateInputObjectSchema } from './TimerBackgroundMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storage_path: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: SortOrderSchema.optional(),
  hex: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => TimerBackgroundCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TimerBackgroundMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TimerBackgroundMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TimerBackgroundOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TimerBackgroundOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundOrderByWithAggregationInput>;
export const TimerBackgroundOrderByWithAggregationInputObjectZodSchema = makeSchema();
