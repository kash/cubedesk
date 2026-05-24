import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUpdateWithoutProfile_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfile_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutProfile_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfile_viewsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutProfile_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutProfile_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutProfile_viewsInput>;
export const UserAccountUpdateToOneWithWhereWithoutProfile_viewsInputObjectZodSchema = makeSchema();
