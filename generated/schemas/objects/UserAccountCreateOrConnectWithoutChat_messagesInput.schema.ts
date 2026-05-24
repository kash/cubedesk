import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutChat_messagesInputObjectSchema as UserAccountCreateWithoutChat_messagesInputObjectSchema } from './UserAccountCreateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedCreateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutChat_messagesInput>;
export const UserAccountCreateOrConnectWithoutChat_messagesInputObjectZodSchema = makeSchema();
