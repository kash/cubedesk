import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveOrderByRelationAggregateInputObjectSchema as SolveOrderByRelationAggregateInputObjectSchema } from './SolveOrderByRelationAggregateInput.schema';
import { SessionOrderByRelevanceInputObjectSchema as SessionOrderByRelevanceInputObjectSchema } from './SessionOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  solves: z.lazy(() => SolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => SessionOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectZodSchema = makeSchema();
