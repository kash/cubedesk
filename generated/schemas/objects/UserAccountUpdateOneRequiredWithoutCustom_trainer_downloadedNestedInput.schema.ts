import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUpsertWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUpsertWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUpsertWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutCustom_trainer_downloadedInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInput>;
export const UserAccountUpdateOneRequiredWithoutCustom_trainer_downloadedNestedInputObjectZodSchema = makeSchema();
