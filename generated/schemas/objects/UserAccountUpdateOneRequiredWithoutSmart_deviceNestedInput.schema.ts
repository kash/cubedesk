import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSmart_deviceInputObjectSchema as UserAccountCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedCreateWithoutSmart_deviceInput.schema';
import { UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema as UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateOrConnectWithoutSmart_deviceInput.schema';
import { UserAccountUpsertWithoutSmart_deviceInputObjectSchema as UserAccountUpsertWithoutSmart_deviceInputObjectSchema } from './UserAccountUpsertWithoutSmart_deviceInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutSmart_deviceInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutSmart_deviceInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutSmart_deviceInput.schema';
import { UserAccountUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUpdateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSmart_deviceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSmart_deviceInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutSmart_deviceInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInput>;
export const UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInputObjectZodSchema = makeSchema();
