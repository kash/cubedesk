import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutBansInputObjectSchema as UserAccountUpdateWithoutBansInputObjectSchema } from './UserAccountUpdateWithoutBansInput.schema';
import { UserAccountUncheckedUpdateWithoutBansInputObjectSchema as UserAccountUncheckedUpdateWithoutBansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutBansInput.schema';
import { UserAccountCreateWithoutBansInputObjectSchema as UserAccountCreateWithoutBansInputObjectSchema } from './UserAccountCreateWithoutBansInput.schema';
import { UserAccountUncheckedCreateWithoutBansInputObjectSchema as UserAccountUncheckedCreateWithoutBansInputObjectSchema } from './UserAccountUncheckedCreateWithoutBansInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutBansInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutBansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutBansInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutBansInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutBansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutBansInput>;
export const UserAccountUpsertWithoutBansInputObjectZodSchema = makeSchema();
