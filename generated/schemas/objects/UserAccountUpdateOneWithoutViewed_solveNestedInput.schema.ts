import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutViewed_solveInputObjectSchema as UserAccountCreateWithoutViewed_solveInputObjectSchema } from './UserAccountCreateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedCreateWithoutViewed_solveInput.schema';
import { UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema as UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema } from './UserAccountCreateOrConnectWithoutViewed_solveInput.schema';
import { UserAccountUpsertWithoutViewed_solveInputObjectSchema as UserAccountUpsertWithoutViewed_solveInputObjectSchema } from './UserAccountUpsertWithoutViewed_solveInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutViewed_solveInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutViewed_solveInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutViewed_solveInput.schema';
import { UserAccountUpdateWithoutViewed_solveInputObjectSchema as UserAccountUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUpdateWithoutViewed_solveInput.schema';
import { UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema as UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema } from './UserAccountUncheckedUpdateWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutViewed_solveInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutViewed_solveInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutViewed_solveInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutViewed_solveInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutViewed_solveInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutViewed_solveNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutViewed_solveNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutViewed_solveNestedInput>;
export const UserAccountUpdateOneWithoutViewed_solveNestedInputObjectZodSchema = makeSchema();
