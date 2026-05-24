import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSettingsInputObjectSchema as UserAccountCreateWithoutSettingsInputObjectSchema } from './UserAccountCreateWithoutSettingsInput.schema';
import { UserAccountUncheckedCreateWithoutSettingsInputObjectSchema as UserAccountUncheckedCreateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSettingsInput.schema';
import { UserAccountCreateOrConnectWithoutSettingsInputObjectSchema as UserAccountCreateOrConnectWithoutSettingsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSettingsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutSettingsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSettingsInput>;
export const UserAccountCreateNestedOneWithoutSettingsInputObjectZodSchema = makeSchema();
