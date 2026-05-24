import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_likesInput.schema';
import { UserAccountUpsertWithoutCustom_trainer_likesInputObjectSchema as UserAccountUpsertWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUpsertWithoutCustom_trainer_likesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_likesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutCustom_trainer_likesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectZodSchema = makeSchema();
