import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSolve_viewsInputObjectSchema as UserAccountCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolve_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSolve_viewsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutSolve_viewsInput>;
export const UserAccountCreateNestedOneWithoutSolve_viewsInputObjectZodSchema = makeSchema();
