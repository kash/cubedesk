import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  new_trainer_id: SortOrderSchema.optional(),
  source_trainer_id: SortOrderSchema.optional()
}).strict();
export const CustomTrainerDownloadCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCountOrderByAggregateInput>;
export const CustomTrainerDownloadCountOrderByAggregateInputObjectZodSchema = makeSchema();
