import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  game_type: z.literal(true).optional(),
  player_count: z.literal(true).optional(),
  elo: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  client_id: z.literal(true).optional()
}).strict();
export const MatchLobbyMaxAggregateInputObjectSchema: z.ZodType<Prisma.MatchLobbyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyMaxAggregateInputType>;
export const MatchLobbyMaxAggregateInputObjectZodSchema = makeSchema();
