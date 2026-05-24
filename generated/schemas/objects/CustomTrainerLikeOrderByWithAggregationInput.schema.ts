import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomTrainerLikeCountOrderByAggregateInputObjectSchema as CustomTrainerLikeCountOrderByAggregateInputObjectSchema } from './CustomTrainerLikeCountOrderByAggregateInput.schema';
import { CustomTrainerLikeMaxOrderByAggregateInputObjectSchema as CustomTrainerLikeMaxOrderByAggregateInputObjectSchema } from './CustomTrainerLikeMaxOrderByAggregateInput.schema';
import { CustomTrainerLikeMinOrderByAggregateInputObjectSchema as CustomTrainerLikeMinOrderByAggregateInputObjectSchema } from './CustomTrainerLikeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  custom_trainer_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  creator_id: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomTrainerLikeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomTrainerLikeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomTrainerLikeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeOrderByWithAggregationInput>;
export const CustomTrainerLikeOrderByWithAggregationInputObjectZodSchema = makeSchema();
