import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutViewed_solveInputObjectSchema as UserAccountUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUpdateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_solveInput.schema';
import { UserAccountCreateWithoutViewed_solveInputObjectSchema as UserAccountCreateWithoutViewed_solveInputObjectSchema } from './UserAccountCreateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_solveInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutViewed_solveInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutViewed_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutViewed_solveInput>;
export const UserAccountUpsertWithoutViewed_solveInputObjectZodSchema = makeSchema();
