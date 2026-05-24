import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BanLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BanLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogOrderByRelationAggregateInput>;
export const BanLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
