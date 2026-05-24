import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema as MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema } from './MatchUpdateOneRequiredWithoutParticipantsNestedInput.schema';
import { SolveUpdateManyWithoutMatch_participantNestedInputObjectSchema as SolveUpdateManyWithoutMatch_participantNestedInputObjectSchema } from './SolveUpdateManyWithoutMatch_participantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resigned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  forfeited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  won: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  lost: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  abandoned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  aborted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  match: z.lazy(() => MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutMatch_participantNestedInputObjectSchema).optional()
}).strict();
export const MatchParticipantUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateWithoutUserInput>;
export const MatchParticipantUpdateWithoutUserInputObjectZodSchema = makeSchema();
