import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogFindManySchema as EloLogFindManySchema } from '../findManyEloLog.schema';
import { GameSessionFindManySchema as GameSessionFindManySchema } from '../findManyGameSession.schema';
import { MatchSessionArgsObjectSchema as MatchSessionArgsObjectSchema } from './MatchSessionArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { MatchParticipantFindManySchema as MatchParticipantFindManySchema } from '../findManyMatchParticipant.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { MatchCountOutputTypeArgsObjectSchema as MatchCountOutputTypeArgsObjectSchema } from './MatchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  winner_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  link_code: z.boolean().optional(),
  match_session_id: z.boolean().optional(),
  ended_at: z.boolean().optional(),
  started_at: z.boolean().optional(),
  spectate_code: z.boolean().optional(),
  aborted: z.boolean().optional(),
  elo_log: z.union([z.boolean(), z.lazy(() => EloLogFindManySchema)]).optional(),
  game_session: z.union([z.boolean(), z.lazy(() => GameSessionFindManySchema)]).optional(),
  match_session: z.union([z.boolean(), z.lazy(() => MatchSessionArgsObjectSchema)]).optional(),
  winner: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  participants: z.union([z.boolean(), z.lazy(() => MatchParticipantFindManySchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MatchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MatchSelectObjectSchema: z.ZodType<Prisma.MatchSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchSelect>;
export const MatchSelectObjectZodSchema = makeSchema();
