import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  to_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  friendship: z.lazy(() => FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUncheckedUpdateWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUncheckedUpdateWithoutFrom_userInput>;
export const FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectZodSchema = makeSchema();
