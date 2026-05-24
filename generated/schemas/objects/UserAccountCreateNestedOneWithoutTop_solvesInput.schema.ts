import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTop_solvesInputObjectSchema as UserAccountCreateWithoutTop_solvesInputObjectSchema } from './UserAccountCreateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_solvesInput.schema';
import { UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema as UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema } from './UserAccountCreateOrConnectWithoutTop_solvesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutTop_solvesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTop_solvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTop_solvesInput>;
export const UserAccountCreateNestedOneWithoutTop_solvesInputObjectZodSchema = makeSchema();
