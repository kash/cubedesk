import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInput>;
export const UserAccountCreateNestedOneWithoutCustom_trainer_downloadsInputObjectZodSchema = makeSchema();
