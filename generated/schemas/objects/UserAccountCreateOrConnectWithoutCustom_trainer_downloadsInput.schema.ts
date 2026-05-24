import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInput>;
export const UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectZodSchema = makeSchema();
