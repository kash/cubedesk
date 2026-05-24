import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FriendshipOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByRelationAggregateInput>;
export const FriendshipOrderByRelationAggregateInputObjectZodSchema = makeSchema();
