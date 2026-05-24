import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const MatchParticipantSumAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantSumAggregateInputType>;
export const MatchParticipantSumAggregateInputObjectZodSchema = makeSchema();
