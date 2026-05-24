import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutSessionsInputObjectSchema as UserAccountUpdateWithoutSessionsInputObjectSchema } from './UserAccountUpdateWithoutSessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSessionsInput.schema';
import { UserAccountCreateWithoutSessionsInputObjectSchema as UserAccountCreateWithoutSessionsInputObjectSchema } from './UserAccountCreateWithoutSessionsInput.schema';
import { UserAccountUncheckedCreateWithoutSessionsInputObjectSchema as UserAccountUncheckedCreateWithoutSessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSessionsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSessionsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutSessionsInput>;
export const UserAccountUpsertWithoutSessionsInputObjectZodSchema = makeSchema();
