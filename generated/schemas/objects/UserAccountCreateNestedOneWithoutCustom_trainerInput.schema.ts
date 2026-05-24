import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutCustom_trainerInputObjectSchema as UserAccountCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainerInput.schema';
import { UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema as UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateOrConnectWithoutCustom_trainerInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutCustom_trainerInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutCustom_trainerInput>;
export const UserAccountCreateNestedOneWithoutCustom_trainerInputObjectZodSchema = makeSchema();
