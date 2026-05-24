import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const MatchParticipantSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantSumOrderByAggregateInput>;
export const MatchParticipantSumOrderByAggregateInputObjectZodSchema = makeSchema();
