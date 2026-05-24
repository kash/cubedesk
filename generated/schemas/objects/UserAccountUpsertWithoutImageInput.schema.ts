import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutImageInputObjectSchema as UserAccountUpdateWithoutImageInputObjectSchema } from './UserAccountUpdateWithoutImageInput.schema';
import { UserAccountUncheckedUpdateWithoutImageInputObjectSchema as UserAccountUncheckedUpdateWithoutImageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutImageInput.schema';
import { UserAccountCreateWithoutImageInputObjectSchema as UserAccountCreateWithoutImageInputObjectSchema } from './UserAccountCreateWithoutImageInput.schema';
import { UserAccountUncheckedCreateWithoutImageInputObjectSchema as UserAccountUncheckedCreateWithoutImageInputObjectSchema } from './UserAccountUncheckedCreateWithoutImageInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutImageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutImageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutImageInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutImageInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutImageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutImageInput>;
export const UserAccountUpsertWithoutImageInputObjectZodSchema = makeSchema();
