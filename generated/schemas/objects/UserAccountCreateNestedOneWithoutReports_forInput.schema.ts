import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutReports_forInputObjectSchema as UserAccountCreateWithoutReports_forInputObjectSchema } from './UserAccountCreateWithoutReports_forInput.schema';
import { UserAccountUncheckedCreateWithoutReports_forInputObjectSchema as UserAccountUncheckedCreateWithoutReports_forInputObjectSchema } from './UserAccountUncheckedCreateWithoutReports_forInput.schema';
import { UserAccountCreateOrConnectWithoutReports_forInputObjectSchema as UserAccountCreateOrConnectWithoutReports_forInputObjectSchema } from './UserAccountCreateOrConnectWithoutReports_forInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutReports_forInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutReports_forInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutReports_forInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutReports_forInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutReports_forInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutReports_forInput>;
export const UserAccountCreateNestedOneWithoutReports_forInputObjectZodSchema = makeSchema();
