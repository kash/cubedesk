import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MatchParticipantOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantOrderByRelationAggregateInput>;
export const MatchParticipantOrderByRelationAggregateInputObjectZodSchema = makeSchema();
