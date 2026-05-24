import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutViewed_solveInputObjectSchema as UserAccountCreateWithoutViewed_solveInputObjectSchema } from './UserAccountCreateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutViewed_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutViewed_solveInput>;
export const UserAccountCreateOrConnectWithoutViewed_solveInputObjectZodSchema = makeSchema();
