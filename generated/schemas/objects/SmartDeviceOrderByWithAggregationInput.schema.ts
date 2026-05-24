import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SmartDeviceCountOrderByAggregateInputObjectSchema as SmartDeviceCountOrderByAggregateInputObjectSchema } from './SmartDeviceCountOrderByAggregateInput.schema';
import { SmartDeviceMaxOrderByAggregateInputObjectSchema as SmartDeviceMaxOrderByAggregateInputObjectSchema } from './SmartDeviceMaxOrderByAggregateInput.schema';
import { SmartDeviceMinOrderByAggregateInputObjectSchema as SmartDeviceMinOrderByAggregateInputObjectSchema } from './SmartDeviceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  internal_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  _count: z.lazy(() => SmartDeviceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SmartDeviceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SmartDeviceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SmartDeviceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SmartDeviceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceOrderByWithAggregationInput>;
export const SmartDeviceOrderByWithAggregationInputObjectZodSchema = makeSchema();
