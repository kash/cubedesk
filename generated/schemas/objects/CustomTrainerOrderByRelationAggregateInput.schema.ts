import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomTrainerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerOrderByRelationAggregateInput>;
export const CustomTrainerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
