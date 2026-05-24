import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  cube_type: z.string(),
  game_type: GameTypeSchema,
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.coerce.date().optional(),
  client_id: z.string()
}).strict();
export const MatchLobbyCreateManyInputObjectSchema: z.ZodType<Prisma.MatchLobbyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyCreateManyInput>;
export const MatchLobbyCreateManyInputObjectZodSchema = makeSchema();
