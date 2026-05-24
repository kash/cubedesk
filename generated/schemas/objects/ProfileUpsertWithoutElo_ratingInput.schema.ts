import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutElo_ratingInputObjectSchema as ProfileUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUpdateWithoutElo_ratingInput.schema';
import { ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema as ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedUpdateWithoutElo_ratingInput.schema';
import { ProfileCreateWithoutElo_ratingInputObjectSchema as ProfileCreateWithoutElo_ratingInputObjectSchema } from './ProfileCreateWithoutElo_ratingInput.schema';
import { ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema as ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedCreateWithoutElo_ratingInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutElo_ratingInput>;
export const ProfileUpsertWithoutElo_ratingInputObjectZodSchema = makeSchema();
