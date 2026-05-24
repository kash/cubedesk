import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutSolve_viewsInputObjectSchema as UserAccountCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutSolve_viewsInput>;
export const UserAccountCreateOrConnectWithoutSolve_viewsInputObjectZodSchema = makeSchema();
