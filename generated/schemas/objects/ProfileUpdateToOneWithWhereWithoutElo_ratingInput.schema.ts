import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutElo_ratingInputObjectSchema as ProfileUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUpdateWithoutElo_ratingInput.schema';
import { ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema as ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedUpdateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutElo_ratingInput>;
export const ProfileUpdateToOneWithWhereWithoutElo_ratingInputObjectZodSchema = makeSchema();
