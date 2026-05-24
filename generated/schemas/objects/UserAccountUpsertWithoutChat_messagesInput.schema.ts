import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutChat_messagesInputObjectSchema as UserAccountUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUpdateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutChat_messagesInput.schema';
import { UserAccountCreateWithoutChat_messagesInputObjectSchema as UserAccountCreateWithoutChat_messagesInputObjectSchema } from './UserAccountCreateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedCreateWithoutChat_messagesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutChat_messagesInput>;
export const UserAccountUpsertWithoutChat_messagesInputObjectZodSchema = makeSchema();
