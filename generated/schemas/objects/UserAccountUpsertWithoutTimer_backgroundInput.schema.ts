import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUpdateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTimer_backgroundInput.schema';
import { UserAccountCreateWithoutTimer_backgroundInputObjectSchema as UserAccountCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountCreateWithoutTimer_backgroundInput.schema';
import { UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema as UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema } from './UserAccountUncheckedCreateWithoutTimer_backgroundInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTimer_backgroundInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTimer_backgroundInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTimer_backgroundInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutTimer_backgroundInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutTimer_backgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutTimer_backgroundInput>;
export const UserAccountUpsertWithoutTimer_backgroundInputObjectZodSchema = makeSchema();
