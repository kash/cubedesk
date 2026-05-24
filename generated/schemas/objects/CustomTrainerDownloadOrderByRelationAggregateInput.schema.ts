import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadOrderByRelationAggregateInput>;
export const CustomTrainerDownloadOrderByRelationAggregateInputObjectZodSchema = makeSchema();
