import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmailLogCountOrderByAggregateInputObjectSchema as EmailLogCountOrderByAggregateInputObjectSchema } from './EmailLogCountOrderByAggregateInput.schema';
import { EmailLogMaxOrderByAggregateInputObjectSchema as EmailLogMaxOrderByAggregateInputObjectSchema } from './EmailLogMaxOrderByAggregateInput.schema';
import { EmailLogMinOrderByAggregateInputObjectSchema as EmailLogMinOrderByAggregateInputObjectSchema } from './EmailLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subject: SortOrderSchema.optional(),
  template: SortOrderSchema.optional(),
  vars: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  _count: z.lazy(() => EmailLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EmailLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EmailLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EmailLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EmailLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogOrderByWithAggregationInput>;
export const EmailLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
