import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accepted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  from_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInputObjectSchema).optional(),
  to_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUpdateWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateWithoutFriendshipInput>;
export const FriendshipRequestUpdateWithoutFriendshipInputObjectZodSchema = makeSchema();
