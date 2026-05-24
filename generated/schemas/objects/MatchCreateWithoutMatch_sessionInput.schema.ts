import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateNestedManyWithoutMatchInputObjectSchema as EloLogCreateNestedManyWithoutMatchInputObjectSchema } from './EloLogCreateNestedManyWithoutMatchInput.schema';
import { GameSessionCreateNestedManyWithoutMatchInputObjectSchema as GameSessionCreateNestedManyWithoutMatchInputObjectSchema } from './GameSessionCreateNestedManyWithoutMatchInput.schema';
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
  elo_log: z.lazy(() => EloLogCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  winner: z.lazy(() => UserAccountCreateNestedOneWithoutMatches_wonInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  solves: z.lazy(() => SolveCreateNestedManyWithoutMatchInputObjectSchema).optional()
}).strict();
export const MatchCreateWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchCreateWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateWithoutMatch_sessionInput>;
export const MatchCreateWithoutMatch_sessionInputObjectZodSchema = makeSchema();
