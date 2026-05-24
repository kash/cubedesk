import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutReports_forInputObjectSchema as UserAccountUpdateWithoutReports_forInputObjectSchema } from './UserAccountUpdateWithoutReports_forInput.schema';
import { UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema as UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedUpdateWithoutReports_forInput.schema';
import { UserAccountCreateWithoutReports_forInputObjectSchema as UserAccountCreateWithoutReports_forInputObjectSchema } from './UserAccountCreateWithoutReports_forInput.schema';
import { UserAccountUncheckedCreateWithoutReports_forInputObjectSchema as UserAccountUncheckedCreateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_forInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutReports_forInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_forInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutReports_forInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutReports_forInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutReports_forInput>;
export const UserAccountUpsertWithoutReports_forInputObjectZodSchema = makeSchema();
