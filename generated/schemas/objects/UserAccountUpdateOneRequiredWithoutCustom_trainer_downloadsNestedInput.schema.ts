import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUpsertWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUpsertWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUpsertWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_downloadsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutCustom_trainer_downloadsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadsNestedInputObjectZodSchema = makeSchema();
