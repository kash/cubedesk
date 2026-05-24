import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutElo_ratingInputObjectSchema as UserAccountUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUpdateWithoutElo_ratingInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_ratingInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_ratingInput>;
export const UserAccountUpdateToOneWithWhereWithoutElo_ratingInputObjectZodSchema = makeSchema();
