import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ForgotPasswordOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordOrderByRelationAggregateInput>;
export const ForgotPasswordOrderByRelationAggregateInputObjectZodSchema = makeSchema();
