import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MatchCountOrderByAggregateInputObjectSchema as MatchCountOrderByAggregateInputObjectSchema } from './MatchCountOrderByAggregateInput.schema';
import { MatchMaxOrderByAggregateInputObjectSchema as MatchMaxOrderByAggregateInputObjectSchema } from './MatchMaxOrderByAggregateInput.schema';
import { MatchMinOrderByAggregateInputObjectSchema as MatchMinOrderByAggregateInputObjectSchema } from './MatchMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  winner_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  link_code: SortOrderSchema.optional(),
  match_session_id: SortOrderSchema.optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  spectate_code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aborted: SortOrderSchema.optional(),
  _count: z.lazy(() => MatchCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MatchMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MatchMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MatchOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MatchOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchOrderByWithAggregationInput>;
export const MatchOrderByWithAggregationInputObjectZodSchema = makeSchema();
