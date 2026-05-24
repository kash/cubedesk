import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { AlgorithmOverrideOrderByRelevanceInputObjectSchema as AlgorithmOverrideOrderByRelevanceInputObjectSchema } from './AlgorithmOverrideOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  rotate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_key: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scrambles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => AlgorithmOverrideOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const AlgorithmOverrideOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideOrderByWithRelationInput>;
export const AlgorithmOverrideOrderByWithRelationInputObjectZodSchema = makeSchema();
