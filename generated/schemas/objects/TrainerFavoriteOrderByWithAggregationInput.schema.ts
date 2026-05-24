import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TrainerFavoriteCountOrderByAggregateInputObjectSchema as TrainerFavoriteCountOrderByAggregateInputObjectSchema } from './TrainerFavoriteCountOrderByAggregateInput.schema';
import { TrainerFavoriteMaxOrderByAggregateInputObjectSchema as TrainerFavoriteMaxOrderByAggregateInputObjectSchema } from './TrainerFavoriteMaxOrderByAggregateInput.schema';
import { TrainerFavoriteMinOrderByAggregateInputObjectSchema as TrainerFavoriteMinOrderByAggregateInputObjectSchema } from './TrainerFavoriteMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cube_key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => TrainerFavoriteCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TrainerFavoriteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TrainerFavoriteMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TrainerFavoriteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteOrderByWithAggregationInput>;
export const TrainerFavoriteOrderByWithAggregationInputObjectZodSchema = makeSchema();
