import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema as MatchUpdateOneRequiredWithoutParticipantsNestedInputObjectSchema } from './MatchUpdateOneRequiredWithoutParticipantsNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInput.schema'

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
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutMatch_participationsNestedInputObjectSchema).optional()
}).strict();
export const MatchParticipantUpdateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateWithoutSolvesInput>;
export const MatchParticipantUpdateWithoutSolvesInputObjectZodSchema = makeSchema();
