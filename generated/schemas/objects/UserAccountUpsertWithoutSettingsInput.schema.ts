import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutSettingsInputObjectSchema as UserAccountUpdateWithoutSettingsInputObjectSchema } from './UserAccountUpdateWithoutSettingsInput.schema';
import { UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema as UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSettingsInput.schema';
import { UserAccountCreateWithoutSettingsInputObjectSchema as UserAccountCreateWithoutSettingsInputObjectSchema } from './UserAccountCreateWithoutSettingsInput.schema';
import { UserAccountUncheckedCreateWithoutSettingsInputObjectSchema as UserAccountUncheckedCreateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSettingsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSettingsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutSettingsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutSettingsInput>;
export const UserAccountUpsertWithoutSettingsInputObjectZodSchema = makeSchema();
