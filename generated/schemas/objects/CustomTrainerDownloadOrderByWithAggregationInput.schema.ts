import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomTrainerDownloadCountOrderByAggregateInputObjectSchema as CustomTrainerDownloadCountOrderByAggregateInputObjectSchema } from './CustomTrainerDownloadCountOrderByAggregateInput.schema';
import { CustomTrainerDownloadMaxOrderByAggregateInputObjectSchema as CustomTrainerDownloadMaxOrderByAggregateInputObjectSchema } from './CustomTrainerDownloadMaxOrderByAggregateInput.schema';
import { CustomTrainerDownloadMinOrderByAggregateInputObjectSchema as CustomTrainerDownloadMinOrderByAggregateInputObjectSchema } from './CustomTrainerDownloadMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  new_trainer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  source_trainer_id: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomTrainerDownloadCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomTrainerDownloadMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomTrainerDownloadMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomTrainerDownloadOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadOrderByWithAggregationInput>;
export const CustomTrainerDownloadOrderByWithAggregationInputObjectZodSchema = makeSchema();
