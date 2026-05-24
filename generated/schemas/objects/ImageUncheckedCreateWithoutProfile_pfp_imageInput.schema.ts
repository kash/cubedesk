import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutHeader_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  profile_header_image: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema).optional()
}).strict();
export const ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateWithoutProfile_pfp_imageInput>;
export const ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
