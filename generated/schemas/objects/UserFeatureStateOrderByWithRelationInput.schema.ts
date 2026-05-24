import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { UserFeatureStateOrderByRelevanceInputObjectSchema as UserFeatureStateOrderByRelevanceInputObjectSchema } from './UserFeatureStateOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  received_welcome_screen: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => UserFeatureStateOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const UserFeatureStateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserFeatureStateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateOrderByWithRelationInput>;
export const UserFeatureStateOrderByWithRelationInputObjectZodSchema = makeSchema();
