import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionArgsObjectSchema as GameSessionArgsObjectSchema } from './GameSessionArgs.schema';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { MatchParticipantArgsObjectSchema as MatchParticipantArgsObjectSchema } from './MatchParticipantArgs.schema';
import { SessionArgsObjectSchema as SessionArgsObjectSchema } from './SessionArgs.schema';
import { SmartDeviceArgsObjectSchema as SmartDeviceArgsObjectSchema } from './SmartDeviceArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveMethodStepFindManySchema as SolveMethodStepFindManySchema } from '../findManySolveMethodStep.schema';
import { SolveViewFindManySchema as SolveViewFindManySchema } from '../findManySolveView.schema';
import { TopAverageFindManySchema as TopAverageFindManySchema } from '../findManyTopAverage.schema';
import { TopSolveFindManySchema as TopSolveFindManySchema } from '../findManyTopSolve.schema';
import { SolveCountOutputTypeArgsObjectSchema as SolveCountOutputTypeArgsObjectSchema } from './SolveCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  time: z.boolean().optional(),
  raw_time: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  scramble: z.boolean().optional(),
  session_id: z.boolean().optional(),
  started_at: z.boolean().optional(),
  ended_at: z.boolean().optional(),
  dnf: z.boolean().optional(),
  plus_two: z.boolean().optional(),
  notes: z.boolean().optional(),
  trainer_name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  bulk: z.boolean().optional(),
  inspection_time: z.boolean().optional(),
  is_smart_cube: z.boolean().optional(),
  smart_put_down_time: z.boolean().optional(),
  smart_turns: z.boolean().optional(),
  smart_turn_count: z.boolean().optional(),
  smart_device_id: z.boolean().optional(),
  match_id: z.boolean().optional(),
  match_participant_id: z.boolean().optional(),
  share_code: z.boolean().optional(),
  from_timer: z.boolean().optional(),
  game_session_id: z.boolean().optional(),
  custom_scramble: z.boolean().optional(),
  training_session_id: z.boolean().optional(),
  game_session: z.union([z.boolean(), z.lazy(() => GameSessionArgsObjectSchema)]).optional(),
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  match_participant: z.union([z.boolean(), z.lazy(() => MatchParticipantArgsObjectSchema)]).optional(),
  session: z.union([z.boolean(), z.lazy(() => SessionArgsObjectSchema)]).optional(),
  smart_device: z.union([z.boolean(), z.lazy(() => SmartDeviceArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solve_method_steps: z.union([z.boolean(), z.lazy(() => SolveMethodStepFindManySchema)]).optional(),
  solve_views: z.union([z.boolean(), z.lazy(() => SolveViewFindManySchema)]).optional(),
  top_average_1: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_average_2: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_average_3: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_average_4: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_average_5: z.union([z.boolean(), z.lazy(() => TopAverageFindManySchema)]).optional(),
  top_solve: z.union([z.boolean(), z.lazy(() => TopSolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SolveCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SolveSelectObjectSchema: z.ZodType<Prisma.SolveSelect> = makeSchema() as unknown as z.ZodType<Prisma.SolveSelect>;
export const SolveSelectObjectZodSchema = makeSchema();
