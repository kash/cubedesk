import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { IntegrationOrderByRelevanceInputObjectSchema as IntegrationOrderByRelevanceInputObjectSchema } from './IntegrationOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  service_name: SortOrderSchema.optional(),
  auth_token: SortOrderSchema.optional(),
  refresh_token: SortOrderSchema.optional(),
  auth_expires_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => IntegrationOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const IntegrationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.IntegrationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationOrderByWithRelationInput>;
export const IntegrationOrderByWithRelationInputObjectZodSchema = makeSchema();
