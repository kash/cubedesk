import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { EmailLogOrderByRelevanceInputObjectSchema as EmailLogOrderByRelevanceInputObjectSchema } from './EmailLogOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subject: SortOrderSchema.optional(),
  template: SortOrderSchema.optional(),
  vars: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => EmailLogOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const EmailLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EmailLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogOrderByWithRelationInput>;
export const EmailLogOrderByWithRelationInputObjectZodSchema = makeSchema();
