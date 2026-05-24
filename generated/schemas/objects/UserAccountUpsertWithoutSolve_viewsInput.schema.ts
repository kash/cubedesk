import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUpdateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolve_viewsInput.schema';
import { UserAccountCreateWithoutSolve_viewsInputObjectSchema as UserAccountCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolve_viewsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutSolve_viewsInput>;
export const UserAccountUpsertWithoutSolve_viewsInputObjectZodSchema = makeSchema();
