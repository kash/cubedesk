import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInputObjectSchema as ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInput.schema';
import { GameOptionsUncheckedUpdateOneWithoutMatch_sessionNestedInputObjectSchema as GameOptionsUncheckedUpdateOneWithoutMatch_sessionNestedInputObjectSchema } from './GameOptionsUncheckedUpdateOneWithoutMatch_sessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  min_players: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  max_players: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  match_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  custom_match: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_by_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rated: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  chat_messages: z.lazy(() => ChatMessageUncheckedUpdateManyWithoutMatch_sessionNestedInputObjectSchema).optional(),
  game_options: z.lazy(() => GameOptionsUncheckedUpdateOneWithoutMatch_sessionNestedInputObjectSchema).optional()
}).strict();
export const MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionUncheckedUpdateWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUncheckedUpdateWithoutMatchesInput>;
export const MatchSessionUncheckedUpdateWithoutMatchesInputObjectZodSchema = makeSchema();
