import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutTimer_backgroundInputObjectSchema as UserAccountCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedCreateWithoutTimer_backgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTimer_backgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTimer_backgroundInput>;
export const UserAccountCreateOrConnectWithoutTimer_backgroundInputObjectZodSchema = makeSchema();
