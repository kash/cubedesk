import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutTop_solvesInputObjectSchema as UserAccountCreateWithoutTop_solvesInputObjectSchema } from './UserAccountCreateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_solvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTop_solvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTop_solvesInput>;
export const UserAccountCreateOrConnectWithoutTop_solvesInputObjectZodSchema = makeSchema();
