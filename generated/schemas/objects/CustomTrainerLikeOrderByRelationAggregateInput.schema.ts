import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CustomTrainerLikeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeOrderByRelationAggregateInput>;
export const CustomTrainerLikeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
