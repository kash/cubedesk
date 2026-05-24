import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutPfp_imageInputObjectSchema as ProfileUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUpdateWithoutPfp_imageInput.schema';
import { ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema as ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutPfp_imageInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutPfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutPfp_imageInput>;
export const ProfileUpdateToOneWithWhereWithoutPfp_imageInputObjectZodSchema = makeSchema();
