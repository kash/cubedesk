import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cube_key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TrainerFavoriteMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteMaxOrderByAggregateInput>;
export const TrainerFavoriteMaxOrderByAggregateInputObjectZodSchema = makeSchema();
