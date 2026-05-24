import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ImageCountOrderByAggregateInputObjectSchema as ImageCountOrderByAggregateInputObjectSchema } from './ImageCountOrderByAggregateInput.schema';
import { ImageMaxOrderByAggregateInputObjectSchema as ImageMaxOrderByAggregateInputObjectSchema } from './ImageMaxOrderByAggregateInput.schema';
import { ImageMinOrderByAggregateInputObjectSchema as ImageMinOrderByAggregateInputObjectSchema } from './ImageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storage_path: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ImageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ImageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ImageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithAggregationInput>;
export const ImageOrderByWithAggregationInputObjectZodSchema = makeSchema();
