import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutProfileInputObjectSchema as UserAccountUpdateWithoutProfileInputObjectSchema } from './UserAccountUpdateWithoutProfileInput.schema';
import { UserAccountUncheckedUpdateWithoutProfileInputObjectSchema as UserAccountUncheckedUpdateWithoutProfileInputObjectSchema } from './UserAccountUncheckedUpdateWithoutProfileInput.schema';
import { UserAccountCreateWithoutProfileInputObjectSchema as UserAccountCreateWithoutProfileInputObjectSchema } from './UserAccountCreateWithoutProfileInput.schema';
import { UserAccountUncheckedCreateWithoutProfileInputObjectSchema as UserAccountUncheckedCreateWithoutProfileInputObjectSchema } from './UserAccountUncheckedCreateWithoutProfileInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutProfileInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutProfileInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutProfileInput>;
export const UserAccountUpsertWithoutProfileInputObjectZodSchema = makeSchema();
