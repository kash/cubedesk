import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInputObjectSchema as FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInputObjectSchema } from './FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendshipsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  friendship_request: z.lazy(() => FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema).optional()
}).strict();
export const FriendshipUpdateWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithoutOther_userInput>;
export const FriendshipUpdateWithoutOther_userInputObjectZodSchema = makeSchema();
