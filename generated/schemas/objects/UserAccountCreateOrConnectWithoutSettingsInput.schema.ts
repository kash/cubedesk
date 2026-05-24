import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutSettingsInputObjectSchema as UserAccountCreateWithoutSettingsInputObjectSchema } from './UserAccountCreateWithoutSettingsInput.schema';
import { UserAccountUncheckedCreateWithoutSettingsInputObjectSchema as UserAccountUncheckedCreateWithoutSettingsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSettingsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSettingsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutSettingsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSettingsInput>;
export const UserAccountCreateOrConnectWithoutSettingsInputObjectZodSchema = makeSchema();
