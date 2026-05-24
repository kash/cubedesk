import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TrainerFavoriteOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteOrderByRelationAggregateInput>;
export const TrainerFavoriteOrderByRelationAggregateInputObjectZodSchema = makeSchema();
