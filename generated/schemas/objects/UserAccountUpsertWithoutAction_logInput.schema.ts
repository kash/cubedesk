import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutAction_logInputObjectSchema as UserAccountUpdateWithoutAction_logInputObjectSchema } from './UserAccountUpdateWithoutAction_logInput.schema';
import { UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema as UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAction_logInput.schema';
import { UserAccountCreateWithoutAction_logInputObjectSchema as UserAccountCreateWithoutAction_logInputObjectSchema } from './UserAccountCreateWithoutAction_logInput.schema';
import { UserAccountUncheckedCreateWithoutAction_logInputObjectSchema as UserAccountUncheckedCreateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutAction_logInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAction_logInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutAction_logInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutAction_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutAction_logInput>;
export const UserAccountUpsertWithoutAction_logInputObjectZodSchema = makeSchema();
