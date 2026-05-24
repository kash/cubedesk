import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUpdateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutSolve_viewsInput>;
export const UserAccountUpdateToOneWithWhereWithoutSolve_viewsInputObjectZodSchema = makeSchema();
