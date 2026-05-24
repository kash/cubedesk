import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMetric_logsInputObjectSchema as UserAccountCreateWithoutMetric_logsInputObjectSchema } from './UserAccountCreateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMetric_logsInput.schema';
import { UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema as UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema } from './UserAccountCreateOrConnectWithoutMetric_logsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutMetric_logsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMetric_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMetric_logsInput>;
export const UserAccountCreateNestedOneWithoutMetric_logsInputObjectZodSchema = makeSchema();
