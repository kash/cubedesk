import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInput>;
export const UserAccountCreateOrConnectWithoutCustom_trainer_downloadedInputObjectZodSchema = makeSchema();
