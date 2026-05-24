import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutElo_ratingInputObjectSchema as ProfileCreateWithoutElo_ratingInputObjectSchema } from './ProfileCreateWithoutElo_ratingInput.schema';
import { ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema as ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedCreateWithoutElo_ratingInput.schema';
import { ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema as ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema } from './ProfileCreateOrConnectWithoutElo_ratingInput.schema';
import { ProfileUpsertWithoutElo_ratingInputObjectSchema as ProfileUpsertWithoutElo_ratingInputObjectSchema } from './ProfileUpsertWithoutElo_ratingInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema as ProfileUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutElo_ratingInput.schema';
import { ProfileUpdateWithoutElo_ratingInputObjectSchema as ProfileUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUpdateWithoutElo_ratingInput.schema';
import { ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema as ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema } from './ProfileUncheckedUpdateWithoutElo_ratingInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutElo_ratingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutElo_ratingInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutElo_ratingInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUpdateWithoutElo_ratingInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutElo_ratingInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutElo_ratingNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutElo_ratingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutElo_ratingNestedInput>;
export const ProfileUpdateOneRequiredWithoutElo_ratingNestedInputObjectZodSchema = makeSchema();
