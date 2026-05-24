import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ChatMessageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ChatMessageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageOrderByRelationAggregateInput>;
export const ChatMessageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
