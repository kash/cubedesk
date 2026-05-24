import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutViewed_solveInputObjectSchema as UserAccountUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUpdateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutViewed_solveInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutViewed_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutViewed_solveInput>;
export const UserAccountUpdateToOneWithWhereWithoutViewed_solveInputObjectZodSchema = makeSchema();
