import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BadgeCountOrderByAggregateInputObjectSchema as BadgeCountOrderByAggregateInputObjectSchema } from './BadgeCountOrderByAggregateInput.schema';
import { BadgeMaxOrderByAggregateInputObjectSchema as BadgeMaxOrderByAggregateInputObjectSchema } from './BadgeMaxOrderByAggregateInput.schema';
import { BadgeMinOrderByAggregateInputObjectSchema as BadgeMinOrderByAggregateInputObjectSchema } from './BadgeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  badge_type_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => BadgeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BadgeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BadgeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BadgeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BadgeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeOrderByWithAggregationInput>;
export const BadgeOrderByWithAggregationInputObjectZodSchema = makeSchema();
