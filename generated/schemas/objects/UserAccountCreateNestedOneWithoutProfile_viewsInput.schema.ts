import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutProfile_viewsInputObjectSchema as UserAccountCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfile_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutProfile_viewsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutProfile_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutProfile_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutProfile_viewsInput>;
export const UserAccountCreateNestedOneWithoutProfile_viewsInputObjectZodSchema = makeSchema();
