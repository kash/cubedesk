import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { BanLogOrderByRelevanceInputObjectSchema as BanLogOrderByRelevanceInputObjectSchema } from './BanLogOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional(),
  banned_user_id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  banned_until: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minutes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  forever: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  banned_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => BanLogOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const BanLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BanLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogOrderByWithRelationInput>;
export const BanLogOrderByWithRelationInputObjectZodSchema = makeSchema();
