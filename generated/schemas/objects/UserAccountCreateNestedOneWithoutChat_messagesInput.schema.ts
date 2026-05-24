import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutChat_messagesInputObjectSchema as UserAccountCreateWithoutChat_messagesInputObjectSchema } from './UserAccountCreateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedCreateWithoutChat_messagesInput.schema';
import { UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema as UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema } from './UserAccountCreateOrConnectWithoutChat_messagesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutChat_messagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutChat_messagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutChat_messagesInput>;
export const UserAccountCreateNestedOneWithoutChat_messagesInputObjectZodSchema = makeSchema();
