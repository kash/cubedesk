import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { UserAccountCreateNestedOneWithoutMatch_lobbiesInputObjectSchema as UserAccountCreateNestedOneWithoutMatch_lobbiesInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatch_lobbiesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_type: z.string(),
  game_type: GameTypeSchema,
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.coerce.date().optional(),
  client_id: z.string(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutMatch_lobbiesInputObjectSchema)
}).strict();
export const MatchLobbyCreateInputObjectSchema: z.ZodType<Prisma.MatchLobbyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyCreateInput>;
export const MatchLobbyCreateInputObjectZodSchema = makeSchema();
