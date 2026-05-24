import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  claimed: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ForgotPasswordCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCountOrderByAggregateInput>;
export const ForgotPasswordCountOrderByAggregateInputObjectZodSchema = makeSchema();
