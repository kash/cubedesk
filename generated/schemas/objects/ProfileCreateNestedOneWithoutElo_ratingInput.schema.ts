import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutElo_ratingInputObjectSchema as ProfileCreateWithoutElo_ratingInputObjectSchema } from './ProfileCreateWithoutElo_ratingInput.schema';
import { ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema as ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedCreateWithoutElo_ratingInput.schema';
import { ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema as ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema } from './ProfileCreateOrConnectWithoutElo_ratingInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutElo_ratingInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutElo_ratingInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutElo_ratingInput>;
export const ProfileCreateNestedOneWithoutElo_ratingInputObjectZodSchema = makeSchema();
