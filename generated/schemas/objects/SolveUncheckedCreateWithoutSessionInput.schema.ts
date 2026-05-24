import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepUncheckedCreateNestedManyWithoutSolveInputObjectSchema as SolveMethodStepUncheckedCreateNestedManyWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedCreateNestedManyWithoutSolveInput.schema';
import { SolveViewUncheckedCreateNestedManyWithoutSolveInputObjectSchema as SolveViewUncheckedCreateNestedManyWithoutSolveInputObjectSchema } from './SolveViewUncheckedCreateNestedManyWithoutSolveInput.schema';
import { TopAverageUncheckedCreateNestedManyWithoutSolve_1InputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutSolve_1Input.schema';
import { TopAverageUncheckedCreateNestedManyWithoutSolve_2InputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutSolve_2Input.schema';
import { TopAverageUncheckedCreateNestedManyWithoutSolve_3InputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutSolve_3Input.schema';
import { TopAverageUncheckedCreateNestedManyWithoutSolve_4InputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutSolve_4Input.schema';
import { TopAverageUncheckedCreateNestedManyWithoutSolve_5InputObjectSchema as TopAverageUncheckedCreateNestedManyWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedCreateNestedManyWithoutSolve_5Input.schema';
import { TopSolveUncheckedCreateNestedManyWithoutSolveInputObjectSchema as TopSolveUncheckedCreateNestedManyWithoutSolveInputObjectSchema } from './TopSolveUncheckedCreateNestedManyWithoutSolveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
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
  smart_device_id: z.string().optional().nullable(),
  match_id: z.string().optional().nullable(),
  match_participant_id: z.string().optional().nullable(),
  share_code: z.string().optional().nullable(),
  from_timer: z.boolean().optional(),
  game_session_id: z.string().optional().nullable(),
  custom_scramble: z.boolean().optional(),
  training_session_id: z.string().optional().nullable(),
  solve_method_steps: z.lazy(() => SolveMethodStepUncheckedCreateNestedManyWithoutSolveInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUncheckedCreateNestedManyWithoutSolveInputObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutSolve_1InputObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutSolve_2InputObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutSolve_3InputObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutSolve_4InputObjectSchema).optional(),
  top_average_5: z.lazy(() => TopAverageUncheckedCreateNestedManyWithoutSolve_5InputObjectSchema).optional(),
  top_solve: z.lazy(() => TopSolveUncheckedCreateNestedManyWithoutSolveInputObjectSchema).optional()
}).strict();
export const SolveUncheckedCreateWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveUncheckedCreateWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedCreateWithoutSessionInput>;
export const SolveUncheckedCreateWithoutSessionInputObjectZodSchema = makeSchema();
