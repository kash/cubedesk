import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ActionLogOrderByRelevanceInputObjectSchema as ActionLogOrderByRelevanceInputObjectSchema } from './ActionLogOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  action_type: SortOrderSchema.optional(),
  action_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ActionLogOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ActionLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActionLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogOrderByWithRelationInput>;
export const ActionLogOrderByWithRelationInputObjectZodSchema = makeSchema();
