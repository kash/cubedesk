import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { MetricLogOrderByRelevanceInputObjectSchema as MetricLogOrderByRelevanceInputObjectSchema } from './MetricLogOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metric_type: SortOrderSchema.optional(),
  metric_value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metric_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => MetricLogOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const MetricLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MetricLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogOrderByWithRelationInput>;
export const MetricLogOrderByWithRelationInputObjectZodSchema = makeSchema();
