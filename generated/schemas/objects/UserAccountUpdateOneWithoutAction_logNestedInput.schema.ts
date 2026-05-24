import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAction_logInputObjectSchema as UserAccountCreateWithoutAction_logInputObjectSchema } from './UserAccountCreateWithoutAction_logInput.schema';
import { UserAccountUncheckedCreateWithoutAction_logInputObjectSchema as UserAccountUncheckedCreateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutAction_logInput.schema';
import { UserAccountCreateOrConnectWithoutAction_logInputObjectSchema as UserAccountCreateOrConnectWithoutAction_logInputObjectSchema } from './UserAccountCreateOrConnectWithoutAction_logInput.schema';
import { UserAccountUpsertWithoutAction_logInputObjectSchema as UserAccountUpsertWithoutAction_logInputObjectSchema } from './UserAccountUpsertWithoutAction_logInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutAction_logInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutAction_logInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutAction_logInput.schema';
import { UserAccountUpdateWithoutAction_logInputObjectSchema as UserAccountUpdateWithoutAction_logInputObjectSchema } from './UserAccountUpdateWithoutAction_logInput.schema';
import { UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema as UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAction_logInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAction_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAction_logInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutAction_logInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAction_logInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutAction_logNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutAction_logNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutAction_logNestedInput>;
export const UserAccountUpdateOneWithoutAction_logNestedInputObjectZodSchema = makeSchema();
