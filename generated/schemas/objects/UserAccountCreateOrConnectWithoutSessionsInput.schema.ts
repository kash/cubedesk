import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutSessionsInputObjectSchema as UserAccountCreateWithoutSessionsInputObjectSchema } from './UserAccountCreateWithoutSessionsInput.schema';
import { UserAccountUncheckedCreateWithoutSessionsInputObjectSchema as UserAccountUncheckedCreateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSessionsInput>;
export const UserAccountCreateOrConnectWithoutSessionsInputObjectZodSchema = makeSchema();
