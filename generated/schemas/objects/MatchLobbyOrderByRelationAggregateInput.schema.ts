import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MatchLobbyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MatchLobbyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyOrderByRelationAggregateInput>;
export const MatchLobbyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
