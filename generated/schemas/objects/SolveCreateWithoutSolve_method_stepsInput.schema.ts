import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateNestedOneWithoutSolvesInputObjectSchema as GameSessionCreateNestedOneWithoutSolvesInputObjectSchema } from './GameSessionCreateNestedOneWithoutSolvesInput.schema';
import { MatchCreateNestedOneWithoutSolvesInputObjectSchema as MatchCreateNestedOneWithoutSolvesInputObjectSchema } from './MatchCreateNestedOneWithoutSolvesInput.schema';
import { MatchParticipantCreateNestedOneWithoutSolvesInputObjectSchema as MatchParticipantCreateNestedOneWithoutSolvesInputObjectSchema } from './MatchParticipantCreateNestedOneWithoutSolvesInput.schema';
import { SessionCreateNestedOneWithoutSolvesInputObjectSchema as SessionCreateNestedOneWithoutSolvesInputObjectSchema } from './SessionCreateNestedOneWithoutSolvesInput.schema';
import { SmartDeviceCreateNestedOneWithoutSolvesInputObjectSchema as SmartDeviceCreateNestedOneWithoutSolvesInputObjectSchema } from './SmartDeviceCreateNestedOneWithoutSolvesInput.schema';
import { UserAccountCreateNestedOneWithoutSolvesInputObjectSchema as UserAccountCreateNestedOneWithoutSolvesInputObjectSchema } from './UserAccountCreateNestedOneWithoutSolvesInput.schema';
import { SolveViewCreateNestedManyWithoutSolveInputObjectSchema as SolveViewCreateNestedManyWithoutSolveInputObjectSchema } from './SolveViewCreateNestedManyWithoutSolveInput.schema';
import { TopAverageCreateNestedManyWithoutSolve_1InputObjectSchema as TopAverageCreateNestedManyWithoutSolve_1InputObjectSchema } from './TopAverageCreateNestedManyWithoutSolve_1Input.schema';
import { TopAverageCreateNestedManyWithoutSolve_2InputObjectSchema as TopAverageCreateNestedManyWithoutSolve_2InputObjectSchema } from './TopAverageCreateNestedManyWithoutSolve_2Input.schema';
import { TopAverageCreateNestedManyWithoutSolve_3InputObjectSchema as TopAverageCreateNestedManyWithoutSolve_3InputObjectSchema } from './TopAverageCreateNestedManyWithoutSolve_3Input.schema';
import { TopAverageCreateNestedManyWithoutSolve_4InputObjectSchema as TopAverageCreateNestedManyWithoutSolve_4InputObjectSchema } from './TopAverageCreateNestedManyWithoutSolve_4Input.schema';
import { TopAverageCreateNestedManyWithoutSolve_5InputObjectSchema as TopAverageCreateNestedManyWithoutSolve_5InputObjectSchema } from './TopAverageCreateNestedManyWithoutSolve_5Input.schema';
import { TopSolveCreateNestedManyWithoutSolveInputObjectSchema as TopSolveCreateNestedManyWithoutSolveInputObjectSchema } from './TopSolveCreateNestedManyWithoutSolveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  raw_time: z.number().optional().nullable(),
  cube_type: z.string().optional().nullable(),
  scramble: z.string().optional().nullable(),
  started_at: z.bigint().optional().nullable(),
  ended_at: z.bigint().optional().nullable(),
  dnf: z.boolean().optional(),
  plus_two: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  trainer_name: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  bulk: z.boolean().optional(),
  inspection_time: z.number().optional().nullable(),
  is_smart_cube: z.boolean().optional(),
  smart_put_down_time: z.number().optional().nullable(),
  smart_turns: z.string().optional().nullable(),
  smart_turn_count: z.number().int().optional().nullable(),
  share_code: z.string().optional().nullable(),
  from_timer: z.boolean().optional(),
  custom_scramble: z.boolean().optional(),
  training_session_id: z.string().optional().nullable(),
  game_session: z.lazy(() => GameSessionCreateNestedOneWithoutSolvesInputObjectSchema).optional(),
  match: z.lazy(() => MatchCreateNestedOneWithoutSolvesInputObjectSchema).optional(),
  match_participant: z.lazy(() => MatchParticipantCreateNestedOneWithoutSolvesInputObjectSchema).optional(),
  session: z.lazy(() => SessionCreateNestedOneWithoutSolvesInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceCreateNestedOneWithoutSolvesInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSolvesInputObjectSchema),
  solve_views: z.lazy(() => SolveViewCreateNestedManyWithoutSolveInputObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageCreateNestedManyWithoutSolve_1InputObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageCreateNestedManyWithoutSolve_2InputObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageCreateNestedManyWithoutSolve_3InputObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageCreateNestedManyWithoutSolve_4InputObjectSchema).optional(),
  top_average_5: z.lazy(() => TopAverageCreateNestedManyWithoutSolve_5InputObjectSchema).optional(),
  top_solve: z.lazy(() => TopSolveCreateNestedManyWithoutSolveInputObjectSchema).optional()
}).strict();
export const SolveCreateWithoutSolve_method_stepsInputObjectSchema: z.ZodType<Prisma.SolveCreateWithoutSolve_method_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateWithoutSolve_method_stepsInput>;
export const SolveCreateWithoutSolve_method_stepsInputObjectZodSchema = makeSchema();
