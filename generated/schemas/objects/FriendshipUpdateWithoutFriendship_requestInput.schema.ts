import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutFriendshipsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  other_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema).optional()
}).strict();
export const FriendshipUpdateWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithoutFriendship_requestInput>;
export const FriendshipUpdateWithoutFriendship_requestInputObjectZodSchema = makeSchema();
