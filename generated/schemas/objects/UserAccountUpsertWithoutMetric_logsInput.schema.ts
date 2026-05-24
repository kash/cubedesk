import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutMetric_logsInputObjectSchema as UserAccountUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUpdateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMetric_logsInput.schema';
import { UserAccountCreateWithoutMetric_logsInputObjectSchema as UserAccountCreateWithoutMetric_logsInputObjectSchema } from './UserAccountCreateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMetric_logsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutMetric_logsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutMetric_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutMetric_logsInput>;
export const UserAccountUpsertWithoutMetric_logsInputObjectZodSchema = makeSchema();
