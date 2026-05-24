import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  auth_expires_at: SortOrderSchema.optional()
}).strict();
export const IntegrationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationAvgOrderByAggregateInput>;
export const IntegrationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
