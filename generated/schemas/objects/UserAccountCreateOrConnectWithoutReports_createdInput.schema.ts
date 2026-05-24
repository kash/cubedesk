import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutReports_createdInputObjectSchema as UserAccountCreateWithoutReports_createdInputObjectSchema } from './UserAccountCreateWithoutReports_createdInput.schema';
import { UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema as UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_createdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutReports_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutReports_createdInput>;
export const UserAccountCreateOrConnectWithoutReports_createdInputObjectZodSchema = makeSchema();
