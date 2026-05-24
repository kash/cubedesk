import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutCustom_trainerInputObjectSchema as UserAccountCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutCustom_trainerInput>;
export const UserAccountCreateOrConnectWithoutCustom_trainerInputObjectZodSchema = makeSchema();
