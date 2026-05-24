import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FriendshipRequestOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestOrderByRelationAggregateInput>;
export const FriendshipRequestOrderByRelationAggregateInputObjectZodSchema = makeSchema();
