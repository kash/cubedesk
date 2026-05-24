import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_likesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_likesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainer_likesInput>;
export const UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectZodSchema = makeSchema();
