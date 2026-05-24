import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { ChatMessageUpdateManyWithoutMatch_sessionNestedInputObjectSchema as ChatMessageUpdateManyWithoutMatch_sessionNestedInputObjectSchema } from './ChatMessageUpdateManyWithoutMatch_sessionNestedInput.schema';
import { GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema as GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema } from './GameOptionsUpdateOneWithoutMatch_sessionNestedInput.schema';
import { UserAccountUpdateOneWithoutMatch_sessions_createdNestedInputObjectSchema as UserAccountUpdateOneWithoutMatch_sessions_createdNestedInputObjectSchema } from './UserAccountUpdateOneWithoutMatch_sessions_createdNestedInput.schema'

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
  created_by: z.lazy(() => UserAccountUpdateOneWithoutMatch_sessions_createdNestedInputObjectSchema).optional()
}).strict();
export const MatchSessionUpdateWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateWithoutMatchesInput>;
export const MatchSessionUpdateWithoutMatchesInputObjectZodSchema = makeSchema();
