import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  game_type: z.boolean().optional(),
  player_count: z.boolean().optional(),
  elo: z.boolean().optional(),
  created_at: z.boolean().optional(),
  client_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const MatchLobbySelectObjectSchema: z.ZodType<Prisma.MatchLobbySelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbySelect>;
export const MatchLobbySelectObjectZodSchema = makeSchema();
