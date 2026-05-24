import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutSolvesInputObjectSchema as UserAccountUpdateWithoutSolvesInputObjectSchema } from './UserAccountUpdateWithoutSolvesInput.schema';
import { UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema as UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutSolvesInput.schema';
import { UserAccountCreateWithoutSolvesInputObjectSchema as UserAccountCreateWithoutSolvesInputObjectSchema } from './UserAccountCreateWithoutSolvesInput.schema';
import { UserAccountUncheckedCreateWithoutSolvesInputObjectSchema as UserAccountUncheckedCreateWithoutSolvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutSolvesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutSolvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutSolvesInput>;
export const UserAccountUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
