import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutMetric_logsInputObjectSchema as UserAccountCreateWithoutMetric_logsInputObjectSchema } from './UserAccountCreateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMetric_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMetric_logsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutMetric_logsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMetric_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMetric_logsInput>;
export const UserAccountCreateOrConnectWithoutMetric_logsInputObjectZodSchema = makeSchema();
