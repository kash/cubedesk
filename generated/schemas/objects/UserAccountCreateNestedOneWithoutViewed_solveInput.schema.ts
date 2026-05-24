import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutViewed_solveInputObjectSchema as UserAccountCreateWithoutViewed_solveInputObjectSchema } from './UserAccountCreateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_solveInput.schema';
import { UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema as UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema } from './UserAccountCreateOrConnectWithoutViewed_solveInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutViewed_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutViewed_solveInput>;
export const UserAccountCreateNestedOneWithoutViewed_solveInputObjectZodSchema = makeSchema();
