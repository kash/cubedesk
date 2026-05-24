import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DemoSolveOrderByRelevanceInputObjectSchema as DemoSolveOrderByRelevanceInputObjectSchema } from './DemoSolveOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  demo_session_id: SortOrderSchema.optional(),
  ip_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  raw_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scramble: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _relevance: z.lazy(() => DemoSolveOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const DemoSolveOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DemoSolveOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveOrderByWithRelationInput>;
export const DemoSolveOrderByWithRelationInputObjectZodSchema = makeSchema();
