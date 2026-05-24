import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInput>;
export const UserAccountCreateNestedOneWithoutCustom_trainer_downloadedInputObjectZodSchema = makeSchema();
