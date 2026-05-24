import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { MatchSessionUpdateOneWithoutChat_messagesNestedInputObjectSchema as MatchSessionUpdateOneWithoutChat_messagesNestedInputObjectSchema } from './MatchSessionUpdateOneWithoutChat_messagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bad_words: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  raw_message: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  match_session: z.lazy(() => MatchSessionUpdateOneWithoutChat_messagesNestedInputObjectSchema).optional()
}).strict();
export const ChatMessageUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ChatMessageUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageUpdateWithoutUserInput>;
export const ChatMessageUpdateWithoutUserInputObjectZodSchema = makeSchema();
