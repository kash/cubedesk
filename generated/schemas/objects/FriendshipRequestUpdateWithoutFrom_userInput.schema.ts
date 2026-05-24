import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { FriendshipUpdateManyWithoutFriendship_requestNestedInputObjectSchema as FriendshipUpdateManyWithoutFriendship_requestNestedInputObjectSchema } from './FriendshipUpdateManyWithoutFriendship_requestNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  friendship: z.lazy(() => FriendshipUpdateManyWithoutFriendship_requestNestedInputObjectSchema).optional(),
  to_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUpdateWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateWithoutFrom_userInput>;
export const FriendshipRequestUpdateWithoutFrom_userInputObjectZodSchema = makeSchema();
