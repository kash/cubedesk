import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutImageInputObjectSchema as UserAccountCreateNestedOneWithoutImageInputObjectSchema } from './UserAccountCreateNestedOneWithoutImageInput.schema';
import { ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema as ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutHeader_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutImageInputObjectSchema),
  profile_header_image: z.lazy(() => ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema).optional()
}).strict();
export const ImageCreateWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateWithoutProfile_pfp_imageInput>;
export const ImageCreateWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
