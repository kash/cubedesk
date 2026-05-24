import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutSolve_viewsInputObjectSchema as UserAccountCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolve_viewsInput.schema';
import { UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema as UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateOrConnectWithoutSolve_viewsInput.schema';
import { UserAccountUpsertWithoutSolve_viewsInputObjectSchema as UserAccountUpsertWithoutSolve_viewsInputObjectSchema } from './UserAccountUpsertWithoutSolve_viewsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutSolve_viewsInput.schema';
import { UserAccountUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUpdateWithoutSolve_viewsInput.schema';
import { UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema as UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolve_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutSolve_viewsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutSolve_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolve_viewsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInputObjectZodSchema = makeSchema();
