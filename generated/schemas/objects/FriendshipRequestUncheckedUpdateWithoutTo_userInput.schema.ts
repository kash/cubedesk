import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  from_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  friendship: z.lazy(() => FriendshipUncheckedUpdateManyWithoutFriendship_requestNestedInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUncheckedUpdateWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUncheckedUpdateWithoutTo_userInput>;
export const FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectZodSchema = makeSchema();
