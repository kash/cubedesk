import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogUncheckedCreateNestedManyWithoutMatchInputObjectSchema as EloLogUncheckedCreateNestedManyWithoutMatchInputObjectSchema } from './EloLogUncheckedCreateNestedManyWithoutMatchInput.schema';
import { GameSessionUncheckedCreateNestedManyWithoutMatchInputObjectSchema as GameSessionUncheckedCreateNestedManyWithoutMatchInputObjectSchema } from './GameSessionUncheckedCreateNestedManyWithoutMatchInput.schema';
import { MatchParticipantUncheckedCreateNestedManyWithoutMatchInputObjectSchema as MatchParticipantUncheckedCreateNestedManyWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedCreateNestedManyWithoutMatchInput.schema';
import { SolveUncheckedCreateNestedManyWithoutMatchInputObjectSchema as SolveUncheckedCreateNestedManyWithoutMatchInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  winner_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  spectate_code: z.string().optional().nullable(),
  aborted: z.boolean().optional(),
  elo_log: z.lazy(() => EloLogUncheckedCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionUncheckedCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantUncheckedCreateNestedManyWithoutMatchInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutMatchInputObjectSchema).optional()
}).strict();
export const MatchUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MatchUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUncheckedCreateInput>;
export const MatchUncheckedCreateInputObjectZodSchema = makeSchema();
