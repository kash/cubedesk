import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutElo_ratingInputObjectSchema as UserAccountUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUpdateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_ratingInput.schema';
import { UserAccountCreateWithoutElo_ratingInputObjectSchema as UserAccountCreateWithoutElo_ratingInputObjectSchema } from './UserAccountCreateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_ratingInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_ratingInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutElo_ratingInput>;
export const UserAccountUpsertWithoutElo_ratingInputObjectZodSchema = makeSchema();
