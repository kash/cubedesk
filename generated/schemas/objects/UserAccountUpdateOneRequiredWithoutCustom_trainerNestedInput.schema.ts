import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainerInputObjectSchema as UserAccountCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainerInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainerInput.schema';
import { UserAccountUpsertWithoutCustom_trainerInputObjectSchema as UserAccountUpsertWithoutCustom_trainerInputObjectSchema } from './UserAccountUpsertWithoutCustom_trainerInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutCustom_trainerInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutCustom_trainerInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutCustom_trainerInput.schema';
import { UserAccountUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutCustom_trainerInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInput>;
export const UserAccountUpdateOneRequiredWithoutCustom_trainerNestedInputObjectZodSchema = makeSchema();
