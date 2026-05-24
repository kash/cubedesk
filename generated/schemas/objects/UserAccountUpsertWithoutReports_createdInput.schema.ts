import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutReports_createdInputObjectSchema as UserAccountUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUpdateWithoutReports_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_createdInput.schema';
import { UserAccountCreateWithoutReports_createdInputObjectSchema as UserAccountCreateWithoutReports_createdInputObjectSchema } from './UserAccountCreateWithoutReports_createdInput.schema';
import { UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema as UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_createdInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_createdInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutReports_createdInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutReports_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutReports_createdInput>;
export const UserAccountUpsertWithoutReports_createdInputObjectZodSchema = makeSchema();
