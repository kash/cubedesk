import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutSettingsInputObjectSchema as UserAccountUpdateWithoutSettingsInputObjectSchema } from './UserAccountUpdateWithoutSettingsInput.schema';
import { UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema as UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutSettingsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSettingsInput>;
export const UserAccountUpdateToOneWithWhereWithoutSettingsInputObjectZodSchema = makeSchema();
