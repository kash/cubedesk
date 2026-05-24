import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  player_count: z.literal(true).optional(),
  elo: z.literal(true).optional()
}).strict();
export const MatchLobbyAvgAggregateInputObjectSchema: z.ZodType<Prisma.MatchLobbyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyAvgAggregateInputType>;
export const MatchLobbyAvgAggregateInputObjectZodSchema = makeSchema();
