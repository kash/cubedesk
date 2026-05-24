import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EloLogUncheckedUpdateManyWithoutMatchNestedInputObjectSchema as EloLogUncheckedUpdateManyWithoutMatchNestedInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutMatchNestedInput.schema';
import { GameSessionUncheckedUpdateManyWithoutMatchNestedInputObjectSchema as GameSessionUncheckedUpdateManyWithoutMatchNestedInputObjectSchema } from './GameSessionUncheckedUpdateManyWithoutMatchNestedInput.schema';
import { MatchParticipantUncheckedUpdateManyWithoutMatchNestedInputObjectSchema as MatchParticipantUncheckedUpdateManyWithoutMatchNestedInputObjectSchema } from './MatchParticipantUncheckedUpdateManyWithoutMatchNestedInput.schema';
import { SolveUncheckedUpdateManyWithoutMatchNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutMatchNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutMatchNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  link_code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  match_session_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ended_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  started_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  spectate_code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  aborted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_log: z.lazy(() => EloLogUncheckedUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionUncheckedUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantUncheckedUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutMatchNestedInputObjectSchema).optional()
}).strict();
export const MatchUncheckedUpdateWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchUncheckedUpdateWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUncheckedUpdateWithoutWinnerInput>;
export const MatchUncheckedUpdateWithoutWinnerInputObjectZodSchema = makeSchema();
