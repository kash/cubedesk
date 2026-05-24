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
export const SolveIncludeObjectSchema: z.ZodType<Prisma.SolveInclude> = makeSchema() as unknown as z.ZodType<Prisma.SolveInclude>;
export const SolveIncludeObjectZodSchema = makeSchema();
