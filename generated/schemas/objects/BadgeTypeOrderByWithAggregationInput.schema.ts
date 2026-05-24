import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BadgeTypeCountOrderByAggregateInputObjectSchema as BadgeTypeCountOrderByAggregateInputObjectSchema } from './BadgeTypeCountOrderByAggregateInput.schema';
import { BadgeTypeAvgOrderByAggregateInputObjectSchema as BadgeTypeAvgOrderByAggregateInputObjectSchema } from './BadgeTypeAvgOrderByAggregateInput.schema';
import { BadgeTypeMaxOrderByAggregateInputObjectSchema as BadgeTypeMaxOrderByAggregateInputObjectSchema } from './BadgeTypeMaxOrderByAggregateInput.schema';
import { BadgeTypeMinOrderByAggregateInputObjectSchema as BadgeTypeMinOrderByAggregateInputObjectSchema } from './BadgeTypeMinOrderByAggregateInput.schema';
import { BadgeTypeSumOrderByAggregateInputObjectSchema as BadgeTypeSumOrderByAggregateInputObjectSchema } from './BadgeTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_by_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => BadgeTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BadgeTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BadgeTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BadgeTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BadgeTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BadgeTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BadgeTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeOrderByWithAggregationInput>;
export const BadgeTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
