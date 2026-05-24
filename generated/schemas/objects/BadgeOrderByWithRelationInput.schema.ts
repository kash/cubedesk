import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BadgeTypeOrderByWithRelationInputObjectSchema as BadgeTypeOrderByWithRelationInputObjectSchema } from './BadgeTypeOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { BadgeOrderByRelevanceInputObjectSchema as BadgeOrderByRelevanceInputObjectSchema } from './BadgeOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  badge_type_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  badge_type: z.lazy(() => BadgeTypeOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => BadgeOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const BadgeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BadgeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeOrderByWithRelationInput>;
export const BadgeOrderByWithRelationInputObjectZodSchema = makeSchema();
