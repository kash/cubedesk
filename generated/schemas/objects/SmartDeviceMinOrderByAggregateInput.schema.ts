import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  internal_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  device_id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const SmartDeviceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SmartDeviceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceMinOrderByAggregateInput>;
export const SmartDeviceMinOrderByAggregateInputObjectZodSchema = makeSchema();
