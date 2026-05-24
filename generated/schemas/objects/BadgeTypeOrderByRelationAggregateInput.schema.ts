import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BadgeTypeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeOrderByRelationAggregateInput>;
export const BadgeTypeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
