import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutReports_forInputObjectSchema as UserAccountCreateWithoutReports_forInputObjectSchema } from './UserAccountCreateWithoutReports_forInput.schema';
import { UserAccountUncheckedCreateWithoutReports_forInputObjectSchema as UserAccountUncheckedCreateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_forInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_forInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutReports_forInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutReports_forInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutReports_forInput>;
export const UserAccountCreateOrConnectWithoutReports_forInputObjectZodSchema = makeSchema();
