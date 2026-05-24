import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutEmail_logInputObjectSchema as UserAccountUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUpdateWithoutEmail_logInput.schema';
import { UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema as UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutEmail_logInput.schema';
import { UserAccountCreateWithoutEmail_logInputObjectSchema as UserAccountCreateWithoutEmail_logInputObjectSchema } from './UserAccountCreateWithoutEmail_logInput.schema';
import { UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema as UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutEmail_logInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutEmail_logInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutEmail_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutEmail_logInput>;
export const UserAccountUpsertWithoutEmail_logInputObjectZodSchema = makeSchema();
