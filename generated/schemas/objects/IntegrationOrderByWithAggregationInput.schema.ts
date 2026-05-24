import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { IntegrationCountOrderByAggregateInputObjectSchema as IntegrationCountOrderByAggregateInputObjectSchema } from './IntegrationCountOrderByAggregateInput.schema';
import { IntegrationAvgOrderByAggregateInputObjectSchema as IntegrationAvgOrderByAggregateInputObjectSchema } from './IntegrationAvgOrderByAggregateInput.schema';
import { IntegrationMaxOrderByAggregateInputObjectSchema as IntegrationMaxOrderByAggregateInputObjectSchema } from './IntegrationMaxOrderByAggregateInput.schema';
import { IntegrationMinOrderByAggregateInputObjectSchema as IntegrationMinOrderByAggregateInputObjectSchema } from './IntegrationMinOrderByAggregateInput.schema';
import { IntegrationSumOrderByAggregateInputObjectSchema as IntegrationSumOrderByAggregateInputObjectSchema } from './IntegrationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  service_name: SortOrderSchema.optional(),
  auth_token: SortOrderSchema.optional(),
  refresh_token: SortOrderSchema.optional(),
  auth_expires_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => IntegrationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => IntegrationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => IntegrationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => IntegrationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => IntegrationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const IntegrationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.IntegrationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationOrderByWithAggregationInput>;
export const IntegrationOrderByWithAggregationInputObjectZodSchema = makeSchema();
