import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutMetric_logsInputObjectSchema as UserAccountUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUpdateWithoutMetric_logsInput.schema';
import { UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema as UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMetric_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutMetric_logsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMetric_logsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutMetric_logsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMetric_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMetric_logsInput>;
export const UserAccountUpdateToOneWithWhereWithoutMetric_logsInputObjectZodSchema = makeSchema();
