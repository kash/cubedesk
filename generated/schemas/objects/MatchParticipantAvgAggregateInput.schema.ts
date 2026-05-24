import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const MatchParticipantAvgAggregateInputObjectSchema: z.ZodType<Prisma.MatchParticipantAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantAvgAggregateInputType>;
export const MatchParticipantAvgAggregateInputObjectZodSchema = makeSchema();
