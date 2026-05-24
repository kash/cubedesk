import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUpdateWithoutSmart_deviceInput.schema';
import { UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema as UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutSmart_deviceInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSmart_deviceInput>;
export const UserAccountUpdateToOneWithWhereWithoutSmart_deviceInputObjectZodSchema = makeSchema();
