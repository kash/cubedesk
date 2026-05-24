import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutEmail_logInputObjectSchema as UserAccountCreateWithoutEmail_logInputObjectSchema } from './UserAccountCreateWithoutEmail_logInput.schema';
import { UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema as UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutEmail_logInput.schema';
import { UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema as UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema } from './UserAccountCreateOrConnectWithoutEmail_logInput.schema';
import { UserAccountUpsertWithoutEmail_logInputObjectSchema as UserAccountUpsertWithoutEmail_logInputObjectSchema } from './UserAccountUpsertWithoutEmail_logInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutEmail_logInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutEmail_logInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutEmail_logInput.schema';
import { UserAccountUpdateWithoutEmail_logInputObjectSchema as UserAccountUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUpdateWithoutEmail_logInput.schema';
import { UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema as UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedUpdateWithoutEmail_logInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutEmail_logInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutEmail_logInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutEmail_logNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutEmail_logNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutEmail_logNestedInput>;
export const UserAccountUpdateOneWithoutEmail_logNestedInputObjectZodSchema = makeSchema();
