import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const MatchParticipantAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantAvgOrderByAggregateInput>;
export const MatchParticipantAvgOrderByAggregateInputObjectZodSchema = makeSchema();
