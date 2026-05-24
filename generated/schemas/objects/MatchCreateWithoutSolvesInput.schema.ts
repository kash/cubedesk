import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateNestedManyWithoutMatchInputObjectSchema as EloLogCreateNestedManyWithoutMatchInputObjectSchema } from './EloLogCreateNestedManyWithoutMatchInput.schema';
import { GameSessionCreateNestedManyWithoutMatchInputObjectSchema as GameSessionCreateNestedManyWithoutMatchInputObjectSchema } from './GameSessionCreateNestedManyWithoutMatchInput.schema';
import { MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema as MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema } from './MatchSessionCreateNestedOneWithoutMatchesInput.schema';
import { UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema as UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatches_wonInput.schema';
import { MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema as MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema } from './MatchParticipantCreateNestedManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  link_code: z.string(),
  ended_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  spectate_code: z.string().optional().nullable(),
  aborted: z.boolean().optional(),
  elo_log: z.lazy(() => EloLogCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema),
  winner: z.lazy(() => UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema).optional()
}).strict();
export const MatchCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateWithoutSolvesInput>;
export const MatchCreateWithoutSolvesInputObjectZodSchema = makeSchema();
