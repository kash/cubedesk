import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { ChatMessageUpdateManyWithoutMatch_sessionNestedInputObjectSchema as ChatMessageUpdateManyWithoutMatch_sessionNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutMatch_sessionNestedInput.schema';
import { GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema as GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema } from './GameOptionsUpdateOneWithoutMatch_sessionNestedInput.schema';
import { MatchUpdateManyWithoutMatch_sessionNestedInputObjectSchema as MatchUpdateManyWithoutMatch_sessionNestedInputObjectSchema } from './MatchUpdateManyWithoutMatch_sessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  min_players: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  max_players: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  match_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  custom_match: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rated: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  chat_messages: z.lazy(() => ChatMessageUpdateManyWithoutMatch_sessionNestedInputObjectSchema).optional(),
  game_options: z.lazy(() => GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema).optional(),
  matches: z.lazy(() => MatchUpdateManyWithoutMatch_sessionNestedInputObjectSchema).optional()
}).strict();
export const MatchSessionUpdateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateWithoutCreated_byInput>;
export const MatchSessionUpdateWithoutCreated_byInputObjectZodSchema = makeSchema();
