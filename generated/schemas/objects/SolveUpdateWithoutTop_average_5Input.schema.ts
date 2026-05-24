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
import { GameSessionUpdateOneWithoutSolvesNestedInputObjectSchema as GameSessionUpdateOneWithoutSolvesNestedInputObjectSchema } from './GameSessionUpdateOneWithoutSolvesNestedInput.schema';
import { MatchUpdateOneWithoutSolvesNestedInputObjectSchema as MatchUpdateOneWithoutSolvesNestedInputObjectSchema } from './MatchUpdateOneWithoutSolvesNestedInput.schema';
import { MatchParticipantUpdateOneWithoutSolvesNestedInputObjectSchema as MatchParticipantUpdateOneWithoutSolvesNestedInputObjectSchema } from './MatchParticipantUpdateOneWithoutSolvesNestedInput.schema';
import { SessionUpdateOneWithoutSolvesNestedInputObjectSchema as SessionUpdateOneWithoutSolvesNestedInputObjectSchema } from './SessionUpdateOneWithoutSolvesNestedInput.schema';
import { SmartDeviceUpdateOneWithoutSolvesNestedInputObjectSchema as SmartDeviceUpdateOneWithoutSolvesNestedInputObjectSchema } from './SmartDeviceUpdateOneWithoutSolvesNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutSolvesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutSolvesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutSolvesNestedInput.schema';
import { SolveMethodStepUpdateManyWithoutSolveNestedInputObjectSchema as SolveMethodStepUpdateManyWithoutSolveNestedInputObjectSchema } from './SolveMethodStepUpdateManyWithoutSolveNestedInput.schema';
import { SolveViewUpdateManyWithoutSolveNestedInputObjectSchema as SolveViewUpdateManyWithoutSolveNestedInputObjectSchema } from './SolveViewUpdateManyWithoutSolveNestedInput.schema';
import { TopAverageUpdateManyWithoutSolve_1NestedInputObjectSchema as TopAverageUpdateManyWithoutSolve_1NestedInputObjectSchema } from './TopAverageUpdateManyWithoutSolve_1NestedInput.schema';
import { TopAverageUpdateManyWithoutSolve_2NestedInputObjectSchema as TopAverageUpdateManyWithoutSolve_2NestedInputObjectSchema } from './TopAverageUpdateManyWithoutSolve_2NestedInput.schema';
import { TopAverageUpdateManyWithoutSolve_3NestedInputObjectSchema as TopAverageUpdateManyWithoutSolve_3NestedInputObjectSchema } from './TopAverageUpdateManyWithoutSolve_3NestedInput.schema';
import { TopAverageUpdateManyWithoutSolve_4NestedInputObjectSchema as TopAverageUpdateManyWithoutSolve_4NestedInputObjectSchema } from './TopAverageUpdateManyWithoutSolve_4NestedInput.schema';
import { TopSolveUpdateManyWithoutSolveNestedInputObjectSchema as TopSolveUpdateManyWithoutSolveNestedInputObjectSchema } from './TopSolveUpdateManyWithoutSolveNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  raw_time: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cube_type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  scramble: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  share_code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  from_timer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  custom_scramble: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  training_session_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  game_session: z.lazy(() => GameSessionUpdateOneWithoutSolvesNestedInputObjectSchema).optional(),
  match: z.lazy(() => MatchUpdateOneWithoutSolvesNestedInputObjectSchema).optional(),
  match_participant: z.lazy(() => MatchParticipantUpdateOneWithoutSolvesNestedInputObjectSchema).optional(),
  session: z.lazy(() => SessionUpdateOneWithoutSolvesNestedInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceUpdateOneWithoutSolvesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutSolvesNestedInputObjectSchema).optional(),
  solve_method_steps: z.lazy(() => SolveMethodStepUpdateManyWithoutSolveNestedInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewUpdateManyWithoutSolveNestedInputObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageUpdateManyWithoutSolve_1NestedInputObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageUpdateManyWithoutSolve_2NestedInputObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageUpdateManyWithoutSolve_3NestedInputObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageUpdateManyWithoutSolve_4NestedInputObjectSchema).optional(),
  top_solve: z.lazy(() => TopSolveUpdateManyWithoutSolveNestedInputObjectSchema).optional()
}).strict();
export const SolveUpdateWithoutTop_average_5InputObjectSchema: z.ZodType<Prisma.SolveUpdateWithoutTop_average_5Input> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithoutTop_average_5Input>;
export const SolveUpdateWithoutTop_average_5InputObjectZodSchema = makeSchema();
