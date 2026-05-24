import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './SolveOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { TopAverageOrderByRelevanceInputObjectSchema as TopAverageOrderByRelevanceInputObjectSchema } from './TopAverageOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  solve_1_id: SortOrderSchema.optional(),
  solve_2_id: SortOrderSchema.optional(),
  solve_3_id: SortOrderSchema.optional(),
  solve_4_id: SortOrderSchema.optional(),
  solve_5_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solve_1: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  solve_2: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  solve_3: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  solve_4: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  solve_5: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => TopAverageOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const TopAverageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TopAverageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageOrderByWithRelationInput>;
export const TopAverageOrderByWithRelationInputObjectZodSchema = makeSchema();
