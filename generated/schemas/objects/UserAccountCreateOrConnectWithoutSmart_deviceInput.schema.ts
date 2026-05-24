import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutSmart_deviceInputObjectSchema as UserAccountCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedCreateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSmart_deviceInput>;
export const UserAccountCreateOrConnectWithoutSmart_deviceInputObjectZodSchema = makeSchema();
