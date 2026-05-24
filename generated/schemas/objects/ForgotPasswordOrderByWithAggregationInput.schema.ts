import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ForgotPasswordCountOrderByAggregateInputObjectSchema as ForgotPasswordCountOrderByAggregateInputObjectSchema } from './ForgotPasswordCountOrderByAggregateInput.schema';
import { ForgotPasswordMaxOrderByAggregateInputObjectSchema as ForgotPasswordMaxOrderByAggregateInputObjectSchema } from './ForgotPasswordMaxOrderByAggregateInput.schema';
import { ForgotPasswordMinOrderByAggregateInputObjectSchema as ForgotPasswordMinOrderByAggregateInputObjectSchema } from './ForgotPasswordMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  claimed: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ForgotPasswordCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ForgotPasswordMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ForgotPasswordMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ForgotPasswordOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ForgotPasswordOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordOrderByWithAggregationInput>;
export const ForgotPasswordOrderByWithAggregationInputObjectZodSchema = makeSchema();
