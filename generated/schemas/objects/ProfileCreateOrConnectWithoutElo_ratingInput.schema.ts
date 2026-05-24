import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutElo_ratingInputObjectSchema as ProfileCreateWithoutElo_ratingInputObjectSchema } from './ProfileCreateWithoutElo_ratingInput.schema';
import { ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema as ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedCreateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutElo_ratingInput>;
export const ProfileCreateOrConnectWithoutElo_ratingInputObjectZodSchema = makeSchema();
