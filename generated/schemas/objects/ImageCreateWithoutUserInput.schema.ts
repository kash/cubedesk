import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema as ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutHeader_imageInput.schema';
import { ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema as ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema } from './ProfileCreateNestedOneWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  profile_header_image: z.lazy(() => ProfileCreateNestedOneWithoutHeader_imageInputObjectSchema).optional(),
  profile_pfp_image: z.lazy(() => ProfileCreateNestedOneWithoutPfp_imageInputObjectSchema).optional()
}).strict();
export const ImageCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateWithoutUserInput>;
export const ImageCreateWithoutUserInputObjectZodSchema = makeSchema();
