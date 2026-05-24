import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBigIntFieldUpdateOperationsInputObjectSchema as NullableBigIntFieldUpdateOperationsInputObjectSchema } from './NullableBigIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInputObjectSchema as SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInputObjectSchema } from './SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInput.schema';
import { SolveViewUncheckedUpdateManyWithoutSolveNestedInputObjectSchema as SolveViewUncheckedUpdateManyWithoutSolveNestedInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutSolveNestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_1NestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_1NestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_1NestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_2NestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_2NestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_2NestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_3NestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_3NestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_3NestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_4NestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_4NestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_4NestedInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_5NestedInputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_5NestedInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_5NestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  raw_time: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cube_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scramble: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  session_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  started_at: z.union([z.bigint(), z.lazy(() => NullableBigIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ended_at: z.union([z.bigint(), z.lazy(() => NullableBigIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dnf: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  plus_two: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  trainer_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bulk: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  inspection_time: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_smart_cube: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  smart_put_down_time: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smart_turns: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smart_turn_count: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  smart_device_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  match_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  match_participant_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  share_code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  from_timer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_session_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  custom_scramble: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  training_session_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  solve_method_steps: z.lazy(() => SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUncheckedUpdateManyWithoutSolveNestedInputObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_1NestedInputObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_2NestedInputObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_3NestedInputObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_4NestedInputObjectSchema).optional(),
  top_average_5: z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_5NestedInputObjectSchema).optional()
}).strict();
export const SolveUncheckedUpdateWithoutTop_solveInputObjectSchema: z.ZodType<Prisma.SolveUncheckedUpdateWithoutTop_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedUpdateWithoutTop_solveInput>;
export const SolveUncheckedUpdateWithoutTop_solveInputObjectZodSchema = makeSchema();
