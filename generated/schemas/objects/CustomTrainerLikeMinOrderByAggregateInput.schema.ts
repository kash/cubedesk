import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custom_trainer_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional()
}).strict();
export const CustomTrainerLikeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeMinOrderByAggregateInput>;
export const CustomTrainerLikeMinOrderByAggregateInputObjectZodSchema = makeSchema();
