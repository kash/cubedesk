import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomCubeTypeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeOrderByRelationAggregateInput>;
export const CustomCubeTypeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
