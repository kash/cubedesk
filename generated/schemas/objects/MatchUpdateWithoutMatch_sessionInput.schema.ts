import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EloLogUpdateManyWithoutMatchNestedInputObjectSchema as EloLogUpdateManyWithoutMatchNestedInputObjectSchema } from './EloLogUpdateManyWithoutMatchNestedInput.schema';
import { GameSessionUpdateManyWithoutMatchNestedInputObjectSchema as GameSessionUpdateManyWithoutMatchNestedInputObjectSchema } from './GameSessionUpdateManyWithoutMatchNestedInput.schema';
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
  elo_log: z.lazy(() => EloLogUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  game_session: z.lazy(() => GameSessionUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  winner: z.lazy(() => UserAccountUpdateOneWithoutMatches_wonNestedInputObjectSchema).optional(),
  participants: z.lazy(() => MatchParticipantUpdateManyWithoutMatchNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutMatchNestedInputObjectSchema).optional()
}).strict();
export const MatchUpdateWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpdateWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateWithoutMatch_sessionInput>;
export const MatchUpdateWithoutMatch_sessionInputObjectZodSchema = makeSchema();
