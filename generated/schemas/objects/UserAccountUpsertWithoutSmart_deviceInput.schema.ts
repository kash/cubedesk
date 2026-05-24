import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUpdateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSmart_deviceInput.schema';
import { UserAccountCreateWithoutSmart_deviceInputObjectSchema as UserAccountCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedCreateWithoutSmart_deviceInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutSmart_deviceInput>;
export const UserAccountUpsertWithoutSmart_deviceInputObjectZodSchema = makeSchema();
