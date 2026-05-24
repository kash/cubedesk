import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSmart_deviceInputObjectSchema as UserAccountCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedCreateWithoutSmart_deviceInput.schema';
import { UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema as UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateOrConnectWithoutSmart_deviceInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSmart_deviceInput>;
export const UserAccountCreateNestedOneWithoutSmart_deviceInputObjectZodSchema = makeSchema();
