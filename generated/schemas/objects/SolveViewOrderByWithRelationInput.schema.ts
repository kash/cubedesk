import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './SolveOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveViewOrderByRelevanceInputObjectSchema as SolveViewOrderByRelevanceInputObjectSchema } from './SolveViewOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  viewer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solve: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  viewer: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => SolveViewOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SolveViewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SolveViewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewOrderByWithRelationInput>;
export const SolveViewOrderByWithRelationInputObjectZodSchema = makeSchema();
