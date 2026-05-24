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
export const CustomTrainerLikeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCountOrderByAggregateInput>;
export const CustomTrainerLikeCountOrderByAggregateInputObjectZodSchema = makeSchema();
