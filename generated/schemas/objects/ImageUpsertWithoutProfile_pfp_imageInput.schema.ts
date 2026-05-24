import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUpdateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_pfp_imageInput.schema';
import { ImageCreateWithoutProfile_pfp_imageInputObjectSchema as ImageCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_pfp_imageInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ImageUpdateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema)]),
  where: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const ImageUpsertWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithoutProfile_pfp_imageInput>;
export const ImageUpsertWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
