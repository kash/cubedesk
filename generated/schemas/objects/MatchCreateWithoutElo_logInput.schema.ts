import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateNestedManyWithoutMatchInputObjectSchema as GameSessionCreateNestedManyWithoutMatchInputObjectSchema } from './GameSessionCreateNestedManyWithoutMatchInput.schema';
import { MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema as MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema } from './MatchSessionCreateNestedOneWithoutMatchesInput.schema';
import { UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema as UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatches_wonInput.schema';
import { MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema as MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema } from './MatchParticipantCreateNestedManyWithoutMatchInput.schema';
import { SolveCreateNestedManyWithoutMatchInputObjectSchema as SolveCreateNestedManyWithoutMatchInputObjectSchema } from './SolveCreateNestedManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  link_code: z.string(),
  ended_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  spectate_code: z.string().optional().nullable(),
  aborted: z.boolean().optional(),
  game_session: z.lazy(() => GameSessionCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema),
  winner: z.lazy(() => UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  solves: z.lazy(() => SolveCreateNestedManyWithoutMatchInputObjectSchema).optional()
}).strict();
export const MatchCreateWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchCreateWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateWithoutElo_logInput>;
export const MatchCreateWithoutElo_logInputObjectZodSchema = makeSchema();
