import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ReportOrderByRelevanceInputObjectSchema as ReportOrderByRelevanceInputObjectSchema } from './ReportOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  reason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_by_id: SortOrderSchema.optional(),
  reported_user_id: SortOrderSchema.optional(),
  resolved_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_by: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  reported_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ReportOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithRelationInput>;
export const ReportOrderByWithRelationInputObjectZodSchema = makeSchema();
