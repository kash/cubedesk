import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  profile_pfp_image: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema).optional()
}).strict();
export const ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateWithoutProfile_header_imageInput>;
export const ImageUncheckedCreateWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
