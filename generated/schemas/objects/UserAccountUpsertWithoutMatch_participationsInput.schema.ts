import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUpdateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_participationsInput.schema';
import { UserAccountCreateWithoutMatch_participationsInputObjectSchema as UserAccountCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_participationsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_participationsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutMatch_participationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutMatch_participationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutMatch_participationsInput>;
export const UserAccountUpsertWithoutMatch_participationsInputObjectZodSchema = makeSchema();
