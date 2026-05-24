import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutChat_messagesInputObjectSchema as UserAccountCreateWithoutChat_messagesInputObjectSchema } from './UserAccountCreateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedCreateWithoutChat_messagesInput.schema';
import { UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema as UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema } from './UserAccountCreateOrConnectWithoutChat_messagesInput.schema';
import { UserAccountUpsertWithoutChat_messagesInputObjectSchema as UserAccountUpsertWithoutChat_messagesInputObjectSchema } from './UserAccountUpsertWithoutChat_messagesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutChat_messagesInput.schema';
import { UserAccountUpdateWithoutChat_messagesInputObjectSchema as UserAccountUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUpdateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutChat_messagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutChat_messagesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutChat_messagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutChat_messagesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutChat_messagesNestedInputObjectZodSchema = makeSchema();
