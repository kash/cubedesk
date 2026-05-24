import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutProfile_viewsInputObjectSchema as UserAccountCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfile_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutProfile_viewsInput.schema';
import { UserAccountUpsertWithoutProfile_viewsInputObjectSchema as UserAccountUpsertWithoutProfile_viewsInputObjectSchema } from './UserAccountUpsertWithoutProfile_viewsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutProfile_viewsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutProfile_viewsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutProfile_viewsInput.schema';
import { UserAccountUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUpdateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfile_viewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfile_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutProfile_viewsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutProfile_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectZodSchema = makeSchema();
