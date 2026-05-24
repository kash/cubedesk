import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './SolveOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { TopSolveOrderByRelevanceInputObjectSchema as TopSolveOrderByRelevanceInputObjectSchema } from './TopSolveOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solve: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => TopSolveOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const TopSolveOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TopSolveOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveOrderByWithRelationInput>;
export const TopSolveOrderByWithRelationInputObjectZodSchema = makeSchema();
