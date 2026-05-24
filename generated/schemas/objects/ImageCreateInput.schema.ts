import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutImageInputObjectSchema as UserAccountCreateNestedOneWithoutImageInputObjectSchema } from './UserAccountCreateNestedOneWithoutImageInput.schema';
import { ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema as ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutHeader_imageInput.schema';
import { ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema as ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutImageInputObjectSchema),
  profile_header_image: z.lazy(() => ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema).optional(),
  profile_pfp_image: z.lazy(() => ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema).optional()
}).strict();
export const ImageCreateInputObjectSchema: z.ZodType<Prisma.ImageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateInput>;
export const ImageCreateInputObjectZodSchema = makeSchema();
