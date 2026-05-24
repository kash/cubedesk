import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMetric_logsInputObjectSchema as UserAccountCreateWithoutMetric_logsInputObjectSchema } from './UserAccountCreateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMetric_logsInput.schema';
import { UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema as UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema } from './UserAccountCreateOrConnectWithoutMetric_logsInput.schema';
import { UserAccountUpsertWithoutMetric_logsInputObjectSchema as UserAccountUpsertWithoutMetric_logsInputObjectSchema } from './UserAccountUpsertWithoutMetric_logsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutMetric_logsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutMetric_logsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutMetric_logsInput.schema';
import { UserAccountUpdateWithoutMetric_logsInputObjectSchema as UserAccountUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUpdateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMetric_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutMetric_logsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutMetric_logsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutMetric_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutMetric_logsNestedInput>;
export const UserAccountUpdateOneWithoutMetric_logsNestedInputObjectZodSchema = makeSchema();
