import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  min_players: z.literal(true).optional(),
  max_players: z.literal(true).optional()
}).strict();
export const MatchSessionSumAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionSumAggregateInputType>;
export const MatchSessionSumAggregateInputObjectZodSchema = makeSchema();
