import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutHeader_imageInput.schema';
import { ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string().optional().nullable(),
  storage_path: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  profile_header_image: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema).optional(),
  profile_pfp_image: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema).optional()
}).strict();
export const ImageUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateWithoutUserInput>;
export const ImageUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
