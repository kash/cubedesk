import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  min_players: z.literal(true).optional(),
  max_players: z.literal(true).optional()
}).strict();
export const MatchSessionAvgAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionAvgAggregateInputType>;
export const MatchSessionAvgAggregateInputObjectZodSchema = makeSchema();
