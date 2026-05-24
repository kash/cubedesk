import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  auth_expires_at: SortOrderSchema.optional()
}).strict();
export const IntegrationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationSumOrderByAggregateInput>;
export const IntegrationSumOrderByAggregateInputObjectZodSchema = makeSchema();
