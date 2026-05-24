import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SmartDeviceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SmartDeviceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceOrderByRelationAggregateInput>;
export const SmartDeviceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
