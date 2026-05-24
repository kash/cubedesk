import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainer_likesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainer_likesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_likesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainer_likesInput>;
export const UserAccountCreateNestedOneWithoutCustom_trainer_likesInputObjectZodSchema = makeSchema();
