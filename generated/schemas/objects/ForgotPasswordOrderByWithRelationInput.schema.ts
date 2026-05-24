import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { ForgotPasswordOrderByRelevanceInputObjectSchema as ForgotPasswordOrderByRelevanceInputObjectSchema } from './ForgotPasswordOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  claimed: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => ForgotPasswordOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const ForgotPasswordOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ForgotPasswordOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordOrderByWithRelationInput>;
export const ForgotPasswordOrderByWithRelationInputObjectZodSchema = makeSchema();
