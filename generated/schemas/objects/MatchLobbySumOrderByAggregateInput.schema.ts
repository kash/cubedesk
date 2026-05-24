import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  player_count: SortOrderSchema.optional(),
  elo: SortOrderSchema.optional()
}).strict();
export const MatchLobbySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchLobbySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbySumOrderByAggregateInput>;
export const MatchLobbySumOrderByAggregateInputObjectZodSchema = makeSchema();
