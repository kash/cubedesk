import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutCreated_bansInputObjectSchema as UserAccountUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUpdateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCreated_bansInput.schema';
import { UserAccountCreateWithoutCreated_bansInputObjectSchema as UserAccountCreateWithoutCreated_bansInputObjectSchema } from './UserAccountCreateWithoutCreated_bansInput.schema';
import { UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema as UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema } from './UserAccountUncheckedCreateWithoutCreated_bansInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCreated_bansInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCreated_bansInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCreated_bansInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutCreated_bansInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutCreated_bansInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutCreated_bansInput>;
export const UserAccountUpsertWithoutCreated_bansInputObjectZodSchema = makeSchema();
