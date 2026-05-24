import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutPfp_imageInputObjectSchema as ProfileUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUpdateWithoutPfp_imageInput.schema';
import { ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema as ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutPfp_imageInput.schema';
import { ProfileCreateWithoutPfp_imageInputObjectSchema as ProfileCreateWithoutPfp_imageInputObjectSchema } from './ProfileCreateWithoutPfp_imageInput.schema';
import { ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutPfp_imageInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutPfp_imageInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutPfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutPfp_imageInput>;
export const ProfileUpsertWithoutPfp_imageInputObjectZodSchema = makeSchema();
