import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutTop_averageInputObjectSchema as UserAccountCreateWithoutTop_averageInputObjectSchema } from './UserAccountCreateWithoutTop_averageInput.schema';
import { UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema as UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_averageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutTop_averageInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTop_averageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTop_averageInput>;
export const UserAccountCreateOrConnectWithoutTop_averageInputObjectZodSchema = makeSchema();
