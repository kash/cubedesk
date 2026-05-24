import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSettingsInputObjectSchema as UserAccountCreateWithoutSettingsInputObjectSchema } from './UserAccountCreateWithoutSettingsInput.schema';
import { UserAccountUncheckedCreateWithoutSettingsInputObjectSchema as UserAccountUncheckedCreateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSettingsInput.schema';
import { UserAccountCreateOrConnectWithoutSettingsInputObjectSchema as UserAccountCreateOrConnectWithoutSettingsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSettingsInput.schema';
import { UserAccountUpsertWithoutSettingsInputObjectSchema as UserAccountUpsertWithoutSettingsInputObjectSchema } from './UserAccountUpsertWithoutSettingsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutSettingsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutSettingsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutSettingsInput.schema';
import { UserAccountUpdateWithoutSettingsInputObjectSchema as UserAccountUpdateWithoutSettingsInputObjectSchema } from './UserAccountUpdateWithoutSettingsInput.schema';
import { UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema as UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSettingsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutSettingsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSettingsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutSettingsNestedInputObjectZodSchema = makeSchema();
