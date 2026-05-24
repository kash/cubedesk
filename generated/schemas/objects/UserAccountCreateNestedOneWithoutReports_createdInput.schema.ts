import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutReports_createdInputObjectSchema as UserAccountCreateWithoutReports_createdInputObjectSchema } from './UserAccountCreateWithoutReports_createdInput.schema';
import { UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema as UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_createdInput.schema';
import { UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema as UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema } from './UserAccountCreateOrConnectWithoutReports_createdInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_createdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutReports_createdInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutReports_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutReports_createdInput>;
export const UserAccountCreateNestedOneWithoutReports_createdInputObjectZodSchema = makeSchema();
