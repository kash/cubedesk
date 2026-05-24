import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { GameSessionUpdateManyWithoutMatchNestedInputObjectSchema as GameSessionUpdateManyWithoutMatchNestedInputObjectSchema } from './GameSessionUpdateManyWithoutMatchNestedInput.schema';
import { MatchSessionUpdateOneRequiredWithoutMatchesNestedInputObjectSchema as MatchSessionUpdateOneRequiredWithoutMatchesNestedInputObjectSchema } from './MatchSessionUpdateOneRequiredWithoutMatchesNestedInput.schema';
import { UserAccountUpdateOneWithoutMatches_wonNestedInputObjectSchema as UserAccountUpdateOneWithoutMatches_wonNestedInputObjectSchema } from './UserAccountUpdateOneWithoutMatches_wonNestedInput.schema';
import { MatchParticipantUpdateManyWithoutMatchNestedInputObjectSchema as MatchParticipantUpdateManyWithoutMatchNestedInputObjectSchema } from './MatchParticipantUpdateManyWithoutMatchNestedInput.schema';
import { SolveUpdateManyWithoutMatchNestedInputObjectSchema as SolveUpdateManyWithoutMatchNestedInputObjectSchema } from './SolveUpdateManyWithoutMatchNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  link_code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ended_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  started_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  spectate_code: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  aborted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_session: z.lazy(() => GameSessionUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  match_session: z.lazy(() => MatchSessionUpdateOneRequiredWithoutMatchesNestedInputObjectSchema).optional(),
  winner: z.lazy(() => UserAccountUpdateOneWithoutMatches_wonNestedInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutMatchNestedInputObjectSchema).optional()
}).strict();
export const MatchUpdateWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchUpdateWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateWithoutElo_logInput>;
export const MatchUpdateWithoutElo_logInputObjectZodSchema = makeSchema();
