import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutProfile_viewsInputObjectSchema as UserAccountCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfile_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutProfile_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutProfile_viewsInput>;
export const UserAccountCreateOrConnectWithoutProfile_viewsInputObjectZodSchema = makeSchema();
