import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutImageInputObjectSchema as UserAccountCreateNestedOneWithoutImageInputObjectSchema } from './UserAccountCreateNestedOneWithoutImageInput.schema';
import { ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema as ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutImageInputObjectSchema),
  profile_pfp_image: z.lazy(() => ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema).optional()
}).strict();
export const ImageCreateWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateWithoutProfile_header_imageInput>;
export const ImageCreateWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
