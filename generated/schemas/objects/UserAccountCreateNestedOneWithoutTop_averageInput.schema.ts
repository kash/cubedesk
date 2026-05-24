import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTop_averageInputObjectSchema as UserAccountCreateWithoutTop_averageInputObjectSchema } from './UserAccountCreateWithoutTop_averageInput.schema';
import { UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema as UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_averageInput.schema';
import { UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema as UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema } from './UserAccountCreateOrConnectWithoutTop_averageInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutTop_averageInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTop_averageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTop_averageInput>;
export const UserAccountCreateNestedOneWithoutTop_averageInputObjectZodSchema = makeSchema();
