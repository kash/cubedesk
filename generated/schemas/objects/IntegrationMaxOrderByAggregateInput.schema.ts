import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  service_name: SortOrderSchema.optional(),
  auth_token: SortOrderSchema.optional(),
  refresh_token: SortOrderSchema.optional(),
  auth_expires_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const IntegrationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationMaxOrderByAggregateInput>;
export const IntegrationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
