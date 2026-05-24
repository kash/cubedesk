import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUpdateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfile_viewsInput.schema';
import { UserAccountCreateWithoutProfile_viewsInputObjectSchema as UserAccountCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfile_viewsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutProfile_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutProfile_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutProfile_viewsInput>;
export const UserAccountUpsertWithoutProfile_viewsInputObjectZodSchema = makeSchema();
