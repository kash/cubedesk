import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BadgeOrderByRelationAggregateInputObjectSchema as BadgeOrderByRelationAggregateInputObjectSchema } from './BadgeOrderByRelationAggregateInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { BadgeTypeOrderByRelevanceInputObjectSchema as BadgeTypeOrderByRelevanceInputObjectSchema } from './BadgeTypeOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  color: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  created_by_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  badges: z.lazy(() => BadgeOrderByRelationAggregateInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => BadgeTypeOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const BadgeTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BadgeTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeOrderByWithRelationInput>;
export const BadgeTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
